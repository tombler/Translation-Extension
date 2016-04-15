console.log("hello");

var results = [];

// Receive results from popup.js
// Store in variable - persistent until browser window is closed!

chrome.runtime.onConnect.addListener(function(port) {
  console.log(port.name);
  port.onMessage.addListener(function(msg) {
    console.log(msg.result.code);
    timeOfSearch = new Date();
    results.push({time: timeOfSearch, content: msg})
    console.log(results);
  });
});


// yandex codes:

// Value   Description
// 200 
// Operation completed successfully
// 401 
// Invalid API key
// 402 
// Blocked API key
// 403 
// Exceeded the daily limit on the number of requests
// 404 
// Exceeded the daily limit on the amount of translated text
// 413 
// Exceeded the maximum text size
// 422 
// The text cannot be translated
// 501 
// The specified translation direction is not supported