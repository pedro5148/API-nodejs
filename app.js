import express from 'express'
import 'dotenv/config'
// import { DatabaseMemory  } from './db.memory.js';
import { DatabasePostgres } from './db.postgres.js';

const app = express();
app.use(express.json())
const PORT = process.env.PORT ?? 3000
const HOST = '0.0.0.0';
// const db = new DatabaseMemory()
const dbpg = new DatabasePostgres()

// Rota principal
app.get('/', (req, res) => {
  res.send('Tudo okkk!');
});

app.get('/movimentos', async (req, res) => {
  try {
    const search = req.query.search
    const mov = await dbpg.list(search)
    res.json(mov || [])  
  } catch (e) {
    console.error("Erro ao buscar movimentos:", e);
    res.status(500).json({ e: "Erro ao buscar movimentos" });
  }
  
})

app.post('/movimentos', async (req, res) => {
  const { origem, tipo, data, valor } = req.body
  await dbpg.create({
    origem,
    tipo,
    data,
    valor
  })
  res.sendStatus(201)
})

app.put('/movimento/:id', async (req, res) => {
  try {
    const movId = req.params.id
    const { origem, tipo, data, valor } = req.body
    
    await dbpg.update(movId, {
      origem,
      tipo,
      data,
      valor
    })
    res.sendStatus(204)
  } catch (e) {
    console.error("Erro ao atualizar movimento:", e);
    res.status(500).json({ e: "Erro ao atualizar movimento" });
  }
})

app.delete('/movimento/:id', async (req, res) => {
  try {
    const movId = req.params.id
    await dbpg.delete(movId)
    return res.sendStatus(204)  
  } catch (e) {
    console.error("Erro ao remover o movimento:", e);
    res.status(500).json({ error: "Erro ao remover o movimento" });
  }
})

app.listen({ host: HOST, port: PORT }, () => {});