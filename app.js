// var axios = require('axios')

axios.get('http://localhost:8080/api/fonts') // your API domain
  .then(function (response) {
    console.log(response);
  });
