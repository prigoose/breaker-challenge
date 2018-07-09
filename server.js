const express = require('express');
const axios = require('axios');
var cors = require('cors');
var bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json({ type: 'application/json' }));
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

app.patch(`/episode/:id`, (req, res) => {
  let episode = {};
  if (req.body.show_title) {
    episode.title = req.body.show_title;
  }
  if (req.body.description) {
    episode.description = req.body.description;
  }
  if (req.body.episode_image) {
    episode.image_url = req.body.episode_image;
  }

  let data = { 'episode': episode };

  var breakerAPI = axios.create({
    method: 'patch',
    timeout: 1000,
    baseURL: 'https://api.breaker.audio/shows/185226/episodes',
    headers: {'User-Agent': 'Breaker/1.0.0 (0)'}
  });
  
  breakerAPI.patch("/29314799", data)
    .then(function (response) {
      res.send('success')
    })
    .catch(function (error) {
      res.send('You do not have permission to patch to breaker. (But we will pretend you do for the purposes of this coding challenge!')
    })
})

app.listen(port, () => console.log(`Breaker server listening on port ${port}!`))