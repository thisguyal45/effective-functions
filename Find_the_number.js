const added = [0, 1, 2, 3, 4].map((item) => item + 1);
var regexp  = new RegExp('{{([^}]+)}}', 'g');
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');