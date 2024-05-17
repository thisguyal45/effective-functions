const merge = Object.assign({}, obj1, obj2);
const resultingPromises = urls.map((url) => makHttpRequest(url));