const axios = require('axios');

async function sentOSNotification(notiNo) {

  console.log("noti get called :@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", notiNo)
  
  const apiUrl = `https://ttb-api-nextjs-one.vercel.app/api/notification-cron/${notiNo}`;

  try {
    const response = await axios.get(apiUrl,{params:{notiNo}});
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('API request failed');
  }
}

module.exports = { sentOSNotification };
