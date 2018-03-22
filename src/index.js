import express from 'express';
import { Serializer } from 'jsonapi-serializer';

const app = express();
const ProgramSerializer = new Serializer('program', {
  attributes: ['program_id', 'status', 'tenent_id']
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/programs', (req, res) => {
  const programsData = [
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
