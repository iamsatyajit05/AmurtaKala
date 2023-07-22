const { TwitterClient } = require('twitter-api-client');
const fs = require('fs');
require('dotenv').config();

const twitterClient = new TwitterClient({
    apiKey: process.env.TWITTER_API_KEY,
    apiSecret: process.env.TWITTER_API_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

async function uploadBanner(filename) {
    console.log('Uploading to twitter...');
    try {
        const base64 = await fs.readFileSync(filename, { encoding: 'base64' });
        await twitterClient.accountsAndUsers
            .accountUpdateProfileBanner({ banner: base64 });
        console.log('Uploading successfull!');
    } catch (error) {
        console.log('Error:', error);
    }
}

module.exports = uploadBanner;