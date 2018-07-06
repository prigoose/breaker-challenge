const express = require('express')
const axios = require('axios')
const app = express()
let port = 4000; 

app.get(`/episode/:id`, (req, res) => {
  const id = req.params.id;

  var breakerAPI = axios.create({
    baseURL: 'https://api.breaker.audio/shows/',
    timeout: 1000,
    headers: {'User-Agent': 'Breaker/1.0.0 (0)'}
  });

  breakerAPI.get(`185226/episodes/${id}`)
    .then(function (response) {
      res.send(response.data)
    })
    .catch(function (error) {
      console.log(error);
      res.send('Error accessing Breaker API')
    })
})

// add patch request

app.listen(port, () => console.log(`Breaker server listening on port ${port}!`))