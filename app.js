const express = require('express');
var app = express();

var bouvierOptions = {
  modules: [
    ['render', require('bouvier-engine'), {}],
//    ['database-controller', require('bouvier-engine'), {}]
//    ['local-login', require('bouvier-login-local'), {}]
  ]
};

const bouvier = require('bouvier')(app, bouvierOptions);

bouvier.module('render').helper('help', (text) => {
  console.log(text);
  return "ok";
});

bouvier.module('render').lay('main');

app.get('/', (req, res) => {
  res.render('home', {shit: "shittttt", shit2: "shit2"});
});

app.listen(80);
