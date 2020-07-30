const request = require('request');
const fs = require('fs');

const site = process.argv[2];
const file = process.argv[3];

request(site, (error, response, body) => { // Making a request to our site 
    if (error) {                           // Print the error if one occurred
        console.log(` status code: ${response && response.statusCode} error: ${error}`);
    }
    fs.writeFile(file, body, (err) => {    // Write to a new file
        if (err) throw err;                // Throws an error, you could also catch it here
        console.log(`Downloaded and saved ${body.length} bytes to ${file}`);
    });
});