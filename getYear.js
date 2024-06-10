console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const symbolsPath = path.join(buildOutputPath, 'symbols');
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));