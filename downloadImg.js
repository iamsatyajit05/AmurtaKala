const axios = require('axios');
const fs = require('fs');

async function downloadImage(url, filename) {
    console.log('Downloading banner...');

    try {
        const response = await axios.get(url, { responseType: 'stream' });
        response.data.pipe(fs.createWriteStream(filename));
        console.log('Downloading successfull!');
    } catch (error) {
        console.log('Error:', error.message);
    }
}

module.exports = downloadImage;