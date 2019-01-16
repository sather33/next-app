const express = require('express');
const next = require('next');

const appPort = 3001;
const dev = process.env.NODE_NEV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('*', (req, res) => handle(req, res));

    server.listen(appPort, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${appPort}`);
    })

  })