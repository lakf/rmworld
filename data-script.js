// Import the Firebase Admin SDK using ES module syntax
import admin from 'firebase-admin';
import { readFile } from 'fs/promises'; // Use promises to read file in ES module style

// Initialize Firebase Admin SDK
const firebaseConfig = {
    apiKey: "AIzaSyCDwJCSg4zCwDowUbhQNlW4pcFc31GZ950",
    authDomain: "runningmanworld1.firebaseapp.com",
    projectId: "runningmanworld1",
    storageBucket: "runningmanworld1.appspot.com",
    messagingSenderId: "206614712620",
    appId: "1:206614712620:web:e52d547da570c19db59c89"
  };
  
  // Initialize Firebase app
  admin.initializeApp(firebaseConfig);
  const db = admin.firestore();

// Load the JSON file
// const citiesData = JSON.parse(await readFile(new URL('assets/geonames-all-cities.json', import.meta.url)));

// Function to filter and upload cities to Firestore
async function uploadCities() {
  const citiesCollection = db.collection('cities');
  let totalUploaded = 0;

  for (const city of citiesData) {
    const population = city.population;
    const countryCode = city.country_code;

    // Filter based on population and country
    if (
      (countryCode === 'US' && population > 100000) || 
      (countryCode !== 'US' && population > 300000)
    ) {
      const cityData = {
        name: city.ascii_name,
        latitude: city.coordinates.lat,
        longitude: city.coordinates.lon,
        population: population
      };

      try {
        // Add city to Firestore
        await citiesCollection.add(cityData);
        totalUploaded++;
      } catch (error) {
        console.error(`Error uploading city: ${city.name} - `, error);
      }
    }
  }

  console.log(`Total cities uploaded: ${totalUploaded}`);
}

// Run the script
// uploadCities()
//   .then(() => {
//     console.log('Upload complete.');
//   })
//   .catch((error) => {
//     console.error('Error uploading cities: ', error);
//   });

const participantsFilePath = './participants.json';

// Function to upload participants to Firestore
async function uploadParticipants() {
  try {
    // Read the participants.json file
    const participants = JSON.parse(fs.readFileSync(participantsFilePath, 'utf8'));

    // Iterate through participants array and upload each participant to Firestore
    for (const participant of participants) {
      // Add each participant as a document in Firestore
      const docRef = db.collection('participants').doc(participant.bibNo);  // Use bibNo as document ID
      await docRef.set(participant);

      console.log(`Participant ${participant.firstName} ${participant.secondName} uploaded successfully.`);
    }

    console.log('All participants uploaded successfully.');
  } catch (error) {
    console.error('Error uploading participants:', error);
  }
}

// Call the uploadParticipants function
uploadParticipants();
