const { Leap } = require("@leap-ai/sdk");
require('dotenv').config();

const leap = new Leap(process.env.LEAP_API_KEY);

async function generateImg() {
    console.log('Generating banner...');

    const { data, error } = await leap.generate.generateImage({
        prompt: "abstract art",
        negativePrompt: "high quality",
        numberOfImages: 1,
        width: 1024,
        height: 512,
        steps: 200,
    });

    if (data) {
        console.log('Generating successfull!');
        return data;
    } else {
        console.log('Error:', error);
    }
}

module.exports = generateImg;