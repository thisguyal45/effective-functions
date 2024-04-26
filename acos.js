const merge = Object.assign({}, obj1, obj2);
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const scriptRootPath = path.join(repositoryRootPath, 'script');