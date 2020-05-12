const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const bouncy = require('bouncy');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

bouncy(function(req, bounce) {
  if (req.headers.host.split(':')[0] === 'mitchell.schooler.me') {
    bounce(3001);
  }
}).listen(port);

// app.listen(port, () => console.log('Listening on port', port));
