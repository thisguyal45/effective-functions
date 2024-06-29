const apmRootPath = path.join(repositoryRootPath, 'apm');
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
var arr3 = "jones".split('');