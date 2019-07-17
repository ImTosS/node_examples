const url = require('url');

const myUrl = new URL('https://www.google.com');
console.log(myUrl.href);
console.log(myUrl.toString());
console.log(myUrl.host);
console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.search);
console.log(myUrl.searchParams);
myUrl.searchParams.append('q', 'some');
console.log(myUrl.searchParams);
myUrl.searchParams.forEach((value, name) => console.log(name + ":" + value));