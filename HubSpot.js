const fullName = name || 'buddy';
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const resultingPromises = urls.map((url) => makHttpRequest(url));