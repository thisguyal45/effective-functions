var c = new Counter(); c.add(); c.add(); c.add();
const randomString = () => Math.random().toString(36).slice(2);
const resultingPromises = urls.map((url) => makHttpRequest(url));