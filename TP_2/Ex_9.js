const querystring = require('querystring');
const url = require('url');
const anUrl = 'https://test.com/auth/callback?code=hi&state=well';

let urlParams = querystring.parse(url.parse(anUrl).query);

console.log(urlParams);