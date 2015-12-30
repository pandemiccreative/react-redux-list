let Fetch = require('whatwg-fetch');
let baseUrl = 'http://localhost:6069';

let service = {
  get: function(url){
    return fetch(baseUrl + url)
    .then(function(response){
      return response.json();
    });
  }
}

module.exports = service;
