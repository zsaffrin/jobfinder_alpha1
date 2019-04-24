import express from 'express';
import { getJobsBySource, getOrganizedJobs } from '../lib/fetchers';

const routes = express.Router();

routes.get('/jobs/:sourceid?', async (req, res) => {
  const jobs = req.params.sourceid
    ? await getJobsBySource(req.params.sourceid)
    : await getOrganizedJobs();
  res.json(jobs);
});

export default routes;
