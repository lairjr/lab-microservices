var express = require('express');
var JSONAPISerializer = require('jsonapi-serializer').Serializer;

var app = express();
var ProgramSerializer = new JSONAPISerializer('program', {
  attributes: ['program_id', 'status', 'tenent_id']
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/programs', function (req, res) {
  var programsData = [
    {
      id: 1,
      program_id: 1451,
      tenent_id: 'globosatPlay',
      status: 'ACTIVE'
    }
  ];
  res.send(ProgramSerializer.serialize(programsData));
});

app.listen(3000);
