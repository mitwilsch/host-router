const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  const { host } = req.headers;
  const [domain, port] = host.split(':');
});

app.listen(port, () => console.log('Listening on port', port));
