const bodyParser = require('body-parser');
const express = require('express');
const api = require('./src/api');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use('/api/v1', api);

app.listen(PORT, ()=> console.log(`App listening on port${PORT}`));