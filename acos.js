var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const apmRootPath = path.join(repositoryRootPath, 'apm');