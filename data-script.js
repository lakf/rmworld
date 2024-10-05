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
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

// Load the JSON file
const citiesData = JSON.parse(await readFile(new URL('assets/geonames-all-cities.json', import.meta.url)));

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
uploadCities()
  .then(() => {
    console.log('Upload complete.');
  })
  .catch((error) => {
    console.error('Error uploading cities: ', error);
  });
