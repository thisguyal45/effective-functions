const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const merge = (a, b) => a.concat(b);
function myAPITS(someString: string, someNum: number) { ... };