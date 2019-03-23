import express from 'express';
import cors from 'cors';
import { getAllJobs } from './lib/fetcher';

const app = express();

app.use(cors());

app.get('/alljobs', async (req, res, next) => {
  const jobs = await getAllJobs();
  res.json(jobs);
});

const port = 4382;
app.listen(port, () =>
  console.info(`JobFinder backend running on port ${port}`)
);
