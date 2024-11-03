const { default: firebase } = require("firebase/compat/app");

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase app
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();
const collection = firebase.collection();

// Popup card logic
const joinPopup = document.getElementById('join-popup');
const removePopup = document.getElementById('remove-popup');

// Show popup when "Join" button is clicked
document.getElementById('join-btn').addEventListener('click', () => {
  joinPopup.style.display = 'block';
});

// Show popup when "Remove" button is clicked
document.getElementById('remove-btn').addEventListener('click', () => {
  removePopup.style.display = 'block';
});

// Close the popups
function closePopup() {
  joinPopup.style.display = 'none';
  removePopup.style.display = 'none';
}

document.getElementById('close-join-form').addEventListener('click', closePopup);
document.getElementById('close-remove-form').addEventListener('click', closePopup);

// Function to check if a user exists in the participants list
async function isUserInParticipants(firstName, secondName) {
  // Normalize inputs to "FirstName LastName" format
  const formattedFirstName = firstName.toLowerCase();
  const formattedSecondName = secondName.toLowerCase();

  // Query Firestore for the formatted names
  const participantsRef = collection(db, 'participants');
  
  const q = query(
    participantsRef, 
    where('firstName', '==', formattedFirstName),
    where('secondName', '==', formattedSecondName)
  );

  try {
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      console.log(querySnapshot);
      console.log('User found in participants.');
      return true;
    } else {
      console.log('User not found in participants.');
      return false;
    }
  } catch (error) {
    console.error('Error checking Firestore:', error);
    return false;
  }
}

function toTitleCase(name) {
  return name
    .toLowerCase() // First convert everything to lowercase
    .split(' ') // Split by space to handle names with multiple parts
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
    .join(' '); // Join them back together with spaces
}

// Function to check if a user with the same first name, second name, and city already exists
async function checkIfUserExists(firstName, secondName, locationId) {
  console.log('Checking if user in same location with same name already exists');
  try {
    // Query the Firestore 'users' collection for the given firstName, secondName, and cityId
    const usersSnapshot = await db.collection('users')
      .where('firstName', '==', firstName)
      .where('secondName', '==', secondName)
      .where('locationId', '==', locationId)
      .get();

    // If the query returns any documents, a user already exists
    if (!usersSnapshot.empty) {
      console.log("existing users: ", usersSnapshot)
      return true;  // User exists
    } else {
      return false; // No user found
    }
  } catch (error) {
    console.error('Error checking for existing user: ', error);
    return false;  // Return false in case of error
  }
}

document.getElementById('country').addEventListener('input', toggleStateInput);
function toggleStateInput() {
  const countryInput = document.getElementById('country').value;
  const stateContainer = document.getElementById('state-container');
  if (countryInput === 'United States') {
      stateContainer.style.display = 'block';
  } else {
      stateContainer.style.display = 'none';
  }
}

// Function to check if a user with the same Instagram handle already exists
async function checkIfInstagramExists(instagram) {
  console.log('Checking if instagram handle already exists');
  try {
    // Query the Firestore 'users' collection for the given Instagram handle
    const usersSnapshot = await db.collection('users')
      .where('instagram', '==', instagram.toLowerCase())
      .get();

    // If the query returns any documents, a user already exists with this Instagram
    if (!usersSnapshot.empty) {
      return true;  // Instagram exists
    } else {
      return false; // No user found with this Instagram
    }
  } catch (error) {
    console.error('Error checking for existing Instagram: ', error);
    return false;  // Return false in case of error
  }
}

let joinFormSubmitting = false;

document.getElementById('join-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    if (joinFormSubmitting) {
        return; // If already submitting, prevent duplicate submissions
    }

    joinFormSubmitting = true; // Set the flag to true, to indicate the form is being submitted

    console.log('Inside the join form.');

    // City validation logic
    const countryInput = document.getElementById('country');
    const countryList = document.getElementById('country-list').options;
    const selectedCountry = countryInput.value.trim();
    const countryError = document.getElementById('country-error');
    
    let isValidCountry = false;

    // Loop through the options in the datalist to check for a match
    for (let i = 0; i < countryList.length; i++) {
      if (selectedCountry === countryList[i].value) {
        isValidCountry = true;
        break;
      }
    }

    if (!isValidCountry) {
      countryError.style.display = 'block'; // Show the error message
      countryInput.value = ''; // Optionally clear the input
      joinFormSubmitting = false; // Reset the flag
      return; // Stop form submission if city is invalid
    } else {
      countryError.style.display = 'none'; // Hide the error message if valid
    }

    // Continue with the rest of the form submission logic if the city is valid
    const joinButton = document.getElementById('join-btn');
    joinButton.disabled = true; // Disable the button
    document.getElementById('loading-indicator').style.display = 'block'; // Show loading indicator

    const firstName = document.getElementById('first-name').value.trim();
    const secondName = document.getElementById('second-name').value.trim();
    const countryId = document.getElementById('country-id').value;
    const stateId = document.getElementById('state-id').value;
    const instagram = document.getElementById('instagram').value.trim();
    const pictureInput = document.getElementById('picture');
    const cityInput = document.getElementById('city').value.trim();

    // Check if the user exists in participants
    if (!isUserInParticipants(firstName, secondName)) {
      alert('User not found in marathon participants. Please check your name and try again.');
      joinButton.disabled = false; // Re-enable the button
      joinFormSubmitting = false; // Reset the flag
      document.getElementById('loading-indicator').style.display = 'none'; // Hide loading
      return; // Stop form submission
    }

    const locationId = stateId || countryId;
    const userExists = await checkIfUserExists(firstName, secondName, locationId);
    if (userExists) {
      alert('A user with the same name in the selected city already exists. Please try again.');
      joinButton.disabled = false; // Re-enable the button
      joinFormSubmitting = false; // Reset the flag
      document.getElementById('loading-indicator').style.display = 'none'; // Hide loading
      return; // Stop form submission
    }

    const instagramExists = await checkIfInstagramExists(instagram);
    if (instagramExists) {
      alert('This Instagram handle is already associated with another user. Please use a different one.');
      joinButton.disabled = false; // Re-enable the button
      joinFormSubmitting = false; // Reset the flag
      document.getElementById('loading-indicator').style.display = 'none'; // Hide loading
      return; // Stop form submission
    }

    try {
      let pictureURL = null;

      // Check if a picture file was selected
      if (pictureInput.files && pictureInput.files[0]) {
        const pictureFile = pictureInput.files[0];
        const storageRef = firebase.storage().ref();
        const pictureRef = storageRef.child(`profile_pictures/${firstName}_${secondName}_${Date.now()}`);

        // Upload the selected picture file
        const uploadSnapshot = await pictureRef.put(pictureFile);
        pictureURL = await uploadSnapshot.ref.getDownloadURL();
      }

      // Continue with adding user to Firestore as before
      const newUserRef = await db.collection('users').add({
        firstName,
        secondName,
        locationId: stateId || countryId,
        instagram: instagram.toLowerCase(),
        pictureURL: pictureURL || null,
        cityName: cityInput
      });

      console.log('Calling incrementLocationUsers for locationId:', locationId);
      await incrementLocationUsers(locationId);

      alert('Thank you for joining!');
      loadCityData();
      closePopup();
    } catch (error) {
      console.error('Error adding user or uploading image:', error);
      alert('Failed to join. Please try again.');
    } finally {
      // Re-enable the button and hide loading in all scenarios
      joinButton.disabled = false;
      joinFormSubmitting = false; // Reset the flag
      document.getElementById('loading-indicator').style.display = 'none'; // Hide loading
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const countryInput = document.getElementById('country');
  const countryError = document.getElementById('country-error');
  const countryList = document.getElementById('country-list');

  // 1. Show the dropdown immediately when the user clicks into the city input (on focus)
  countryInput.addEventListener('focus', () => {
    countryError.style.display = 'none'; // Hide any previous error message
    // Trigger an input event to open the dropdown list immediately
    const event = new Event('input', { bubbles: true });
    countryInput.dispatchEvent(event);
  });

  // Validation logic to check if the input matches a city from the datalist
  countryInput.addEventListener('blur', () => {
    validateCountry(); // Call validation when the user clicks out
  });

  function validateCountry() {
    const selectedCountry = countryInput.value.trim();
    let isValidCountry = false;

    // Check if the entered city matches one of the datalist options
    for (let i = 0; i < countryList.options.length; i++) {
      if (selectedCountry === countryList.options[i].value) {
        isValidCountry = true;
        break;
      }
    }

    if (!isValidCountry) {
      countryError.style.display = 'block'; // Show the error message if invalid
      countryInput.value = ''; // Optionally clear the input
    } else {
      countryError.style.display = 'none'; // Hide the error message if valid
    }
  }
});

async function incrementLocationUsers(locationId) {
  console.log('In increment location users');
  try {
    const locationRef = db.collection('location').doc(locationId);

    await db.runTransaction(async (transaction) => {
      const locationDoc = await transaction.get(locationRef);

      if (!locationDoc.exists) {
        console.error(`Location document with ID ${locationId} does not exist!`);
        return;
      } else {
        console.log(`Location document with ID ${locationId} exists. Proceeding to update.`);
      }

      const currentNumberOfUsers = locationDoc.data().numberOfUsers || 0;

      transaction.update(locationRef, {
        numberOfUsers: currentNumberOfUsers + 1
      });
    });
    console.log('Location user count incremented successfully.');
  } catch (error) {
    console.error('Error incrementing location users:', error);
  }
}

// Handle "Remove" form submission (communicate with Firebase)
document.getElementById('remove-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const firstName = document.getElementById('first-name-remove').value;
  const secondName = document.getElementById('second-name-remove').value;

  try {
    // Step 1: Check if user exists with the provided first name and second name
    const usersSnapshot = await db.collection('users')
      .where('firstName', '==', firstName)
      .where('secondName', '==', secondName)
      .get();

    // Step 2: Handle if no user is found
    if (usersSnapshot.empty) {
      alert('No user found with the given name. Please check the details.');
      return; // Stop submission
    }

    // Step 3: Collect all matching user IDs (handle multiple matches)
    const userIds = [];
    usersSnapshot.forEach(doc => {
      userIds.push(doc.id); // Collect the user ID
    });

    // Step 4: Submit the removal request to the 'removal_requests' collection with the matched user IDs
    await db.collection('removal_requests').add({
      firstName: firstName,
      secondName: secondName,
      userIds: userIds,  // Store the matching user IDs
      timestamp: new Date() // Save the timestamp of the request
    });

    alert("Your removal request has been submitted. Removal will occur within 24hrs.");
  } catch (error) {
    console.error("Error submitting removal request: ", error);
    alert("Failed to submit removal request. Please try again.");
  }

  closePopup(); // Close the form popup after successful submission
});

// Fetch city data from Firestore
async function fetchLocations() {
  const locationCollection = db.collection("location")
      .where('numberOfUsers', '>', 0)  // Filter for cities where numberOfUsers is greater than 0
      .orderBy('numberOfUsers', 'desc') // Order by numberOfUsers in descending order
      .limit(100); 
  const locationSnapshot = await locationCollection.get();
  const locations = [];

  locationSnapshot.forEach((locationDoc) => {
    const cityData = locationDoc.data();
    locations.push({
      id: locationDoc.id,
      name: cityData.stateName || cityData.countryName,
      latitude: cityData.latitude,
      longitude: cityData.longitude,
      numberOfUsers: cityData.numberOfUsers,
      country: cityData.country
    });
  });

  // console.log("LOCATIONS: ", locations);  // Check that city data is being fetched correctly
  return locations;
}

// Fetch user data for a specific city from Firestore
async function fetchUsersForLocation(locationId) {
  const usersSnapshot = await db.collection("users").where('locationId', '==', locationId).get();
  const users = [];

  usersSnapshot.forEach((userDoc) => {
    const userData = userDoc.data();
    users.push({
      firstName: userData.firstName,
      secondName: userData.secondName,
      instagram: userData.instagram,
      pictureURL: userData.pictureURL,
      city: userData.cityName
    });
  });

  console.log(`USERS FOR LOCATION (${locationId}): `, users);  // Log the users for debugging
  return users;
}

function fetchCitiesAndCreateGlobe() {
  // Globe.js initialization with Firebase data
  fetchLocations().then(locations => {
    console.log(locations); // Log the cities to check if data is being pulled correctly
    
    const globe = Globe()
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
    .labelsData(locations)
    .labelLat(d => d.latitude)
    .labelLng(d => d.longitude)
    .labelText(d => d.name)
    .labelSize(d => {
        const minSize = 0.6; // Minimum label size
        const maxSize = 1.6; // Maximum label size
        const minUsers = 1;   // Minimum number of users
        const maxUsers = 30;  // Maximum number of users

        // Calculate the size based on the number of users
        return ((d.numberOfUsers - minUsers) / (maxUsers - minUsers)) * (maxSize - minSize) + minSize;
    })
    .labelDotRadius(d => {
        const minRadius = 0.6; // Minimum label size
        const maxRadius = 1.2;

        // Calculate the radius based on the number of users
        return ((d.numberOfUsers - 1) / (30 - 1)) * (maxRadius - minRadius) + minRadius; 
    })
    .labelColor(() => '#ffffff')
    .labelResolution(2)
    .backgroundColor('#FDF5E8')
    (document.getElementById('globeViz'));

  // Set initial view to the USA
  globe.pointOfView({ lat: 37.0902, lng: -95.7129, altitude: 2.5 }, 1000);

  // Handle label clicks to show city info and associated users
  globe.onLabelClick(async location => {
    console.log("label clicked, location: ", location)
    const selectedLocation = locations.find(c => c.name === location.name);
    console.log("selectedLocation: ", selectedLocation)
    if (selectedLocation) {
      const locationInfo = selectedLocation.name;
      
      // Fetch users for the selected city
      // console.log("selectedLocation.id: ", selectedLocation.id);
      const users = await fetchUsersForLocation(selectedLocation.id);
      // console.log("users found in location: ", users)

      // Map users data to display
      const usersInfo = users.map(user => `
        <a href="https://instagram.com/${user.instagram}" target="_blank" class="user-card-link">
          <div class="user-card">
            <img src="${user.pictureURL}" alt="${user.firstName}'s picture" class="user-picture">
            <div class="user-info">
              <p class="user-name">${user.firstName} ${user.secondName}</p>
              <p class="user-instagram">${user.city}</p>
              <p class="user-instagram">@${user.instagram}</p>
            </div>
          </div>
        </a>
      `).join("");  // Join without extra spaces to avoid layout issues
        // Join without extra spaces to avoid layout issues

      // console.log("usersInfo: ", usersInfo);

      // Update the popup with city and user info
      document.getElementById('location-name').textContent = locationInfo;
      document.getElementById('location-info').innerHTML = usersInfo; // Use innerHTML to render HTML content

      // Show the city info popup
      document.getElementById('location-popup').style.display = 'block';
    }
});
});
};

// Close city info popup
document.getElementById('location-close-btn').addEventListener('click', function() {
  document.getElementById('location-popup').style.display = 'none';
});

// Function to populate the city options in the datalist
function populateCityOptions(countryMapping, stateMapping) {
  const countryDatalist = document.getElementById('country-list');
  const stateDatalist = document.getElementById('state-list');
  
  // Clear existing options
  countryDatalist.innerHTML = '';
  stateDatalist.innerHTML = '';

  // Add options to the datalist
  for (const [cityName, cityId] of Object.entries(countryMapping)) {
    const option = document.createElement('option');
    option.value = cityName;  // Display the city name to the user
    option.dataset.cityId = cityId;  // Store city ID in data attribute
    countryDatalist.appendChild(option);
  }

  for (const [cityName, cityId] of Object.entries(stateMapping)) {
    const option = document.createElement('option');
    option.value = cityName;  // Display the city name to the user
    option.dataset.cityId = cityId;  // Store city ID in data attribute
    stateDatalist.appendChild(option);
  }
}

async function loadCityMapping(countryPath, statePath) {
  try {
    const countryResponse = await fetch(countryPath);
    const stateResponse = await fetch(statePath);
    
    if (!countryResponse.ok) {
      throw new Error(`Failed to fetch country-mapping.json from ${countryPath}: ${countryResponse.statusText}`);
    }

    if (!stateResponse.ok) {
      throw new Error(`Failed to fetch state-mapping.json from ${statePath}: ${stateResponse.statusText}`);
    }

    const countryMapping = await countryResponse.json();  // Parse JSON from the response
    const stateMapping = await stateResponse.json();
    populateCityOptions(countryMapping, stateMapping);  // Populate the city datalist
  } catch (error) {
    console.error('Error loading mapping:', error);
  }
}

// Event listener for country selection
document.getElementById('country').addEventListener('input', function () {
  const countryName = this.value;
  const datalistOptions = document.querySelectorAll('#country-list option');
  
  // Find the matching option and set the city ID
  for (let option of datalistOptions) {
    if (option.value === countryName) {
      document.getElementById('country-id').value = option.dataset.cityId;
      break;
    }
  }
});

// Event listener for city selection
document.getElementById('state').addEventListener('input', function () {
  const stateName = this.value;
  const datalistOptions = document.querySelectorAll('#state-list option');
  
  // Find the matching option and set the city ID
  for (let option of datalistOptions) {
    if (option.value === stateName) {
      document.getElementById('state-id').value = option.dataset.cityId;
      break;
    }
  }
});


async function loadCityData() {
  // Show the loading indicator
  document.getElementById('loading-indicator').style.display = 'block';

  try {
    // Simulate the time it takes to load data (e.g., fetching city data)
    await loadGlobeData(); // Whatever logic is needed to load the globe or data

    // Hide the loading indicator once the data is fully loaded
    document.getElementById('loading-indicator').style.display = 'none';

    console.log('City data loaded, globe rendered');
  } catch (error) {
    console.error('Error loading data:', error);
    // Optionally, handle the error and inform the user
    document.getElementById('loading-indicator').textContent = 'Failed to load data. Please try again.';
  }
}

// Simulate a function that loads the globe or city data
async function loadGlobeData() {
  // Simulating a delay for data loading
  return new Promise((resolve) => {
    setTimeout(() => {
      // Logic to load the globe or data can go here
      fetchCitiesAndCreateGlobe();
      resolve();
    }, 1000); // Simulate a 3-second delay
  });
}

async function participantExists(secondName, bibNumber) {
  // Normalize inputs for comparison
  const normalizedSecondName = secondName.toLowerCase();

  // Reference to Firestore collection
  const participantsRef = firebase.firestore().collection('participants');

  // Query Firestore to find participant by surname and bib number
  const querySnapshot = await participantsRef
    .where('secondName', '==', normalizedSecondName)
    .where('bibNo', '==', bibNumber)
    .get();

  return !querySnapshot.empty; // Returns true if participant exists
}

// Function to normalize names (capitalize first letter of each name)
function normalizeName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

// Form submission logic for the overlay
document.getElementById('participant-check-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const secondName = document.getElementById('surname').value.trim();
  const bibNumber = document.getElementById('bib-number').value.trim();

  // Check if participant exists in Firestore
  const exists = await participantExists(secondName, bibNumber);
  
  if (exists) {
    document.getElementById('overlay-form').style.display = 'none'; // Hide overlay form
  } else {
    const errorMessageDiv = document.getElementById('error-message');
    errorMessageDiv.textContent = 'Participant not found. Please check your details.';
    errorMessageDiv.style.display = 'block'; // Show error message
  }
});

// Call the loadCityData function on window load or when necessary
window.onload = loadCityData;

loadCityMapping('country-list.json', 'state-list.json');
