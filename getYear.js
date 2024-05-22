const uniqueArray = arr => [...new Set(arr)];
const timeFromDate = date => date.toTimeString().slice(0, 8);
const resultingPromises = urls.map((url) => makHttpRequest(url));