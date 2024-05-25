// reportWebVitals.js

const { getCLS, getFID, getFCP, getLCP, getTTFB } = require("web-vitals");

function sendToAnalytics(metric) {
  // This function sends the metric data to analytics or monitoring service
  console.log(metric);
}

// Measure all the Web Vitals
function measureWebVitals() {
  getCLS(sendToAnalytics);
  getFID(sendToAnalytics);
  getFCP(sendToAnalytics);
  getLCP(sendToAnalytics);
  getTTFB(sendToAnalytics);
}

export default measureWebVitals;
