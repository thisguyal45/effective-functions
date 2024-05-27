const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const isEmptyObject = obj => Object.keys(obj).length === 0;