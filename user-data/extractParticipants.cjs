const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Path to your HTML files
const htmlFilesDirectory = './webpages'; // Replace with the directory of your HTML files
const outputFilePath = './participants.json';

// Function to extract participant data from a single HTML file
function extractParticipantsFromFile(htmlContent) {
  const $ = cheerio.load(htmlContent);
  const participants = [];

  // Select all table rows from the resultsTable
  $('#resultsTable tbody tr').each((i, row) => {
    const firstName = $(row).find('.participantName__name__firstName').text().trim();
    const lastName = $(row).find('.participantName__name__lastName').text().trim();
    const bibNo = $(row).find('.bib').text().trim();
    const raceDataCity = $(row).find('td:nth-child(7)').text().trim(); // Adjust the selector if the city is in another column

    // Ensure that we have valid data before pushing
    if (firstName && lastName && bibNo && raceDataCity) {
      participants.push({
        firstName: firstName,
        secondName: lastName,
        raceDataCity: raceDataCity,
        bibNo: bibNo
      });
    }
  });

  return participants;
}

// Function to process all HTML files in the directory
function processHtmlFiles(directoryPath) {
  let allParticipants = [];

  // Read all HTML files from the directory
  fs.readdirSync(directoryPath).forEach(file => {
    const filePath = path.join(directoryPath, file);

    if (path.extname(filePath) === '.htm' || path.extname(filePath) === '.html') {
      // Read the content of each HTML file
      const htmlContent = fs.readFileSync(filePath, 'utf8');

      // Extract participants from the current file
      const participants = extractParticipantsFromFile(htmlContent);
      allParticipants = allParticipants.concat(participants);
    }
  });

  // Write the result to a JSON file
  fs.writeFileSync(outputFilePath, JSON.stringify(allParticipants, null, 2), 'utf8');
  console.log(`Extracted ${allParticipants.length} participants and saved to ${outputFilePath}`);
}

// Run the process
processHtmlFiles(htmlFilesDirectory);