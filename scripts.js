const firebaseConfig = {
  apiKey: window.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: window.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: window.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: window.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: window.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: window.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: window.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase app
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

console.log("Firebase API Key: ", window.env.REACT_APP_FIREBASE_API_KEY);

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

let participants = [];

// Fetch participants data when the script loads
fetch('./participants.json')
  .then(response => response.json())
  .then(data => {
    participants = data;
  })
  .catch(error => console.error('Error loading participants data:', error));

// Function to check if a user exists in the participants list
function isUserInParticipants(firstName, secondName) {
  // Normalize inputs for case-insensitive comparison
  const normalizedFirstName = firstName.toLowerCase();
  const normalizedSecondName = secondName.toLowerCase();

  // Check if the participant exists
  return participants.some(participant => 
    participant.firstName.toLowerCase() === normalizedFirstName &&
    participant.secondName.toLowerCase() === normalizedSecondName
  );
}

// Function to check if a user with the same first name, second name, and city already exists
async function checkIfUserExists(firstName, secondName, cityId) {
  try {
    // Query the Firestore 'users' collection for the given firstName, secondName, and cityId
    const usersSnapshot = await db.collection('users')
      .where('firstName', '==', firstName)
      .where('secondName', '==', secondName)
      .where('cityId', '==', cityId)
      .get();

    // If the query returns any documents, a user already exists
    if (!usersSnapshot.empty) {
      return true;  // User exists
    } else {
      return false; // No user found
    }
  } catch (error) {
    console.error('Error checking for existing user: ', error);
    return false;  // Return false in case of error
  }
}

// Function to check if a user with the same Instagram handle already exists
async function checkIfInstagramExists(instagram) {
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

// Update the image upload logic to use the cropped image blob
document.getElementById('join-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const firstName = document.getElementById('first-name').value.trim();
  const secondName = document.getElementById('second-name').value.trim();
  const cityId = document.getElementById('city-id').value;
  const instagram = document.getElementById('instagram').value.trim();
  const pictureInput = document.getElementById('picture');  // Get the picture input element

  if (!isUserInParticipants(firstName, secondName)) {
    alert('User not found in marathon participants. Please check your name and try again.');
    return; // Stop form submission
  }

  const userExists = await checkIfUserExists(firstName, secondName, cityId);
  if (userExists) {
    alert('A user with the same name in the selected city already exists. Please try again.');
    return; // Stop form submission
  }

  const instagramExists = await checkIfInstagramExists(instagram);
  if (instagramExists) {
    alert('This Instagram handle is already associated with another user. Please use a different one.');
    return; // Stop form submission
  }

  try {
    let pictureURL = null;

    // Check if a picture file was selected
    if (pictureInput.files && pictureInput.files[0]) {
      const pictureFile = pictureInput.files[0];  // Access the selected file
      
      const storageRef = firebase.storage().ref();
      const pictureRef = storageRef.child(`profile_pictures/${firstName}_${secondName}_${Date.now()}`);

      // Upload the selected picture file
      const uploadSnapshot = await pictureRef.put(pictureFile);

      // Get the image's download URL
      pictureURL = await uploadSnapshot.ref.getDownloadURL();
    }

    // Continue with adding user to Firestore as before
    const newUserRef = await db.collection('users').add({
      firstName,
      secondName,
      cityId,
      instagram: instagram.toLowerCase(),
      pictureURL: pictureURL || null
    });

    alert('Thank you for joining!');
    closePopup();
  } catch (error) {
    console.error('Error adding user or uploading image:', error);
    alert('Failed to join. Please try again.');
  }
});

async function incrementCityUsers(cityId) {
  try {
    const cityRef = db.collection('cities').doc(cityId);

    await db.runTransaction(async (transaction) => {
      const cityDoc = await transaction.get(cityRef);

      if(!cityDoc.exists) {
        console.error('City document does not exist!');
        return;
      }

      const currentNumberOfUsers = cityDoc.data().numberOfUsers || 0;

      transaction.update(cityRef, {
        numberOfUsers: currentNumberOfUsers + 1
      });
    });
    console.log('City user coutn incremented successfuly.');
  } catch (error) {
    console.error('Error incrementing city users:', error);
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
      alert("No user found with the given name. Please check the details.");
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
async function fetchCities() {
  const citiesCollection = db.collection("cities")
      .where('numberOfUsers', '>', 0)  // Filter for cities where numberOfUsers is greater than 0
      .orderBy('numberOfUsers', 'desc') // Order by numberOfUsers in descending order
      .limit(100); 
  const citiesSnapshot = await citiesCollection.get();
  const cities = [];

  citiesSnapshot.forEach((cityDoc) => {
    const cityData = cityDoc.data();
    cities.push({
      id: cityDoc.id,
      name: cityData.name,
      latitude: cityData.latitude,
      longitude: cityData.longitude,
      population: cityData.population,
      numberOfUsers: cityData.numberOfUsers,
      country: cityData.country
    });
  });

  console.log("CITIES: ", cities);  // Check that city data is being fetched correctly
  return cities;
}

// Fetch user data for a specific city from Firestore
async function fetchUsersForCity(cityId) {
  const usersSnapshot = await db.collection("users").where('cityId', '==', cityId).get();
  const users = [];

  usersSnapshot.forEach((userDoc) => {
    const userData = userDoc.data();
    users.push({
      firstName: userData.firstName,
      secondName: userData.secondName,
      instagram: userData.instagram,
      pictureURL: userData.pictureURL
    });
  });

  console.log(`USERS FOR CITY (${cityId}): `, users);  // Log the users for debugging
  return users;
}

function fetchCitiesAndCreateGlobe() {
  // Globe.js initialization with Firebase data
  fetchCities().then(cities => {
    console.log(cities); // Log the cities to check if data is being pulled correctly
    
    const globe = Globe()
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
    .labelsData(cities)
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
  globe.onLabelClick(async city => {
    const selectedCity = cities.find(c => c.name === city.name);
    if (selectedCity) {
      const cityInfo = selectedCity.name + ", " + selectedCity.country;
      
      // Fetch users for the selected city
      const users = await fetchUsersForCity(selectedCity.id);

      // Map users data to display
      const usersInfo = users.map(user => `
        <div class="user-card">
          <img src="${user.pictureURL}" alt="${user.firstName}'s picture" class="user-picture">
          <div class="user-info">
            <p class="user-name">${user.firstName} ${user.secondName}</p>
            <p class="user-instagram">@${user.instagram}</p>
          </div>
        </div>
      `).join("");  // Join without extra spaces to avoid layout issues

      console.log("usersInfo: ", usersInfo);

      // Update the popup with city and user info
      document.getElementById('city-name').textContent = cityInfo;
      document.getElementById('city-info').innerHTML = usersInfo; // Use innerHTML to render HTML content

      // Show the city info popup
      document.getElementById('city-popup').style.display = 'block';
    }
});
});
};

// Close city info popup
function closeCityPopup() {
  document.getElementById('city-popup').style.display = 'none';
}

// Function to populate the city options in the datalist
function populateCityOptions(cityMapping) {
  const datalist = document.getElementById('city-list');
  
  // Clear existing options
  datalist.innerHTML = '';

  // Add options to the datalist
  for (const [cityName, cityId] of Object.entries(cityMapping)) {
    const option = document.createElement('option');
    option.value = cityName;  // Display the city name to the user
    option.dataset.cityId = cityId;  // Store city ID in data attribute
    datalist.appendChild(option);
  }
}

// Function to load the city-mapping JSON from a path
async function loadCityMapping(path) {
  try {
    const response = await fetch(path);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch city-mapping.json from ${path}: ${response.statusText}`);
    }

    const cityMapping = await response.json();  // Parse JSON from the response
    populateCityOptions(cityMapping);  // Populate the city datalist
  } catch (error) {
    console.error('Error loading city mapping:', error);
  }
}

// Event listener for city selection
document.getElementById('city').addEventListener('input', function () {
  const cityName = this.value;
  const datalistOptions = document.querySelectorAll('#city-list option');
  
  // Find the matching option and set the city ID
  for (let option of datalistOptions) {
    if (option.value === cityName) {
      document.getElementById('city-id').value = option.dataset.cityId;
      break;
    }
  }
});

// Event listener for city selection
document.getElementById('city').addEventListener('input', function () {
  const cityName = this.value;
  const datalistOptions = document.querySelectorAll('#city-list option');
  
  // Find the matching option and set the city ID
  for (let option of datalistOptions) {
    if (option.value === cityName) {
      document.getElementById('city-id').value = option.dataset.cityId;
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

// Call the loadCityData function on window load or when necessary
window.onload = loadCityData;

loadCityMapping('city-mapping.json');



