const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const bouncy = require('bouncy');

const app = express();
const port = process.env.PORT || 80;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

bouncy(function(req, bounce) {
  const domain = req.headers.host.split(':')[0];

  if (domain === 'mitchell.schooler.me') {
    bounce(3001);
    console.log(`redirecting ${domain} to ${3001}`);
  }
  if (domain === 'localhost') {
    bounce(3001);
    console.log('redirecting localhost');
  }
  if (domain === '35.212.252.95') {
    bounce(3001);
  }
}).listen(port);

// app.listen(port, () => console.log('Listening on port', port));
