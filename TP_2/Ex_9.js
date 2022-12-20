import url from 'url'
const querystring = require('querystring');

let exampleUrl = 'https://www.youtube.com/';
 
let parsed_Url = url.parse(exampleUrl);
 
let parsed_queryString = querystring.parse(parsed_Url.query);
 
console.log("This is parsed URL :",parsed_Url);
 
console.log("This is parsed Query String :",parsed_queryString);