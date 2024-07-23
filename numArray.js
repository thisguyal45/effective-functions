const randomString = () => Math.random().toString(36).slice(2);
const arrayContains = (arr, element) => arr.includes(element);
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");