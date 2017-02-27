'use strict';

// const fs = require('fs');
const path = require('path');

// const bodyParser = require('body-parser');
// const morgan = require('morgan');

const express = require('express');
const app = express();
const port = process.env.PORT || 8001;

app.use(express.static(path.join(__dirname, 'public')));
// app.disable('x-powered-by'); // hides/does not show what kind of server you are running
// app.use(morgan('dev')); //terminal logger, set to more verbose logs
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true}));

app.use(function(req, res){
  res.sendStatus(404);
});

app.listen(port, function(){
  console.log('Listening on ', port);
});




module.export = app;
