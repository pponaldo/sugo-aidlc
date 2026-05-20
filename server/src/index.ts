import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { analyzeDiary } from './controllers/analyzeController.js';

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/analyze', analyzeDiary);

app.use((_req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
