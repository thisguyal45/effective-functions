var regexp  = new RegExp('{{([^}]+)}}', 'g');
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);