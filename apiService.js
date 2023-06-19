const axios = require('axios');

async function sentOSNotification(notiNo) {

  console.log("noti get called :@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", notiNo)
  
  const apiUrl = `http://localhost:3001/api/notification-cron/${notiNo}`;

  try {
    const response = await axios.get(apiUrl,{params:{notiNo}});
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('API request failed');
  }
}

module.exports = { sentOSNotification };
