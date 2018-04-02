import express from 'express';
import { Serializer } from 'jsonapi-serializer';
import websocket from './websocket';
import ws from 'express-ws';

const app = express();
ws(app);

const ProgramSerializer = new Serializer('program', {
  attributes: ['program_id', 'status', 'tenent_id']
});

const someAsyncFunc = () => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Agora');
    }, 2000)
  })
)

app.ws('/connect', websocket);

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

app.get('/async', async (req, res) => {
  const result = await someAsyncFunc();
  res.send(result);
})

app.listen(3000);
