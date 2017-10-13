var express = require('express');
var JSONAPISerializer = require('jsonapi-serializer').Serializer;

var app = express();
var ProgramSerializer = new JSONAPISerializer('programs', {
  attributes: ['title', 'category']
});

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/programs', function (req, res) {
  var programData = [
    {
      id: 1,
      title: 'Jornal do Almoço',
      category: 'Notícias'
    }
  ];
  res.send(ProgramSerializer.serialize(programData));
});

app.listen(3000);
