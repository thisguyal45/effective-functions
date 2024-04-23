console.log("1 && 2 = "+(1 && 2));
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const merge = (a, b) => [...a, ...b];