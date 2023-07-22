const downloadImage = require('./downloadImg');
const generateImg = require('./generateImg');
const uploadBanner = require('./uploadToTwitter');

const cron = require('node-cron');
const express = require('express');
const app = express();

async function updateTwitterBanner() {
    const bannerImagePath = 'bannerImage.png';

    const data = await generateImg();
    const imageURL = data.images[0].uri;

    await downloadImage(imageURL, bannerImagePath);

    setTimeout(async () => {
        await uploadBanner(bannerImagePath);
    }, 5000);
}

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

cron.schedule('0 7 * * *', () => {
    updateTwitterBanner();
});