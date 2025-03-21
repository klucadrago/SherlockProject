const express = require('express');
const next = require('next');
const fetch = require('node-fetch');
const { log } = require("console");
const OpenAI = require("openai").default;

const P = `Genera una storie investigativa  La storia deve includere:

Un crimine: descrivi il crimine commesso (es. un furto, un omicidio, una scomparsa).

Un colpevole: crea un personaggio che è il responsabile del crimine, ma la sua identità deve rimanere nascosta fino alla fine.

Una lista di sospetti: almeno 3-5 personaggi con motivazioni, alibi e personalità diverse.

Indizi sparsi: fornisci dettagli che possano portare alla soluzione del mistero, ma che siano anche fuorvianti per creare suspense.

La storia deve essere coinvolgente e permettere al giocatore di dedurre la soluzione analizzando i dettagli e i dialoghi.`

require('dotenv').config();
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
console.log(OPENAI_API_KEY);

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Middleware per gestire il corpo delle richieste JSON
  server.use(express.json());

  // Endpoint personalizzato per OpenAI
  server.post('/api/openai', async (req, res) => {

    try {
      const openai = new OpenAI({
        baseURL: 'https://openrouter.ai/api/v1',
        apiKey: OPENAI_API_KEY,
        defaultHeaders: {
          'HTTP-Referer': '<YOUR_SITE_URL>', 
          'X-Title': '<YOUR_SITE_NAME>', 
        },
      });

      const completion = await openai.chat.completions.create({
        model: 'deepseek/deepseek-chat:free',
        messages: [
          {
            role: 'user',
            content: P,
          },
        ],
      });

      res.status(200).json(completion);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Errore durante la richiesta a OpenAI' });
    }
  });

  // Gestione delle richieste Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Avvio del server
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server in ascolto su http://localhost:3000');
  });
});