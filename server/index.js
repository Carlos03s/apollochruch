const express = require('express');
const cors = require('cors');
const routes = require('./Routes')
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); 

app.use(cors())
app.use(routes)

app.listen(3010, console.log('online'));

     