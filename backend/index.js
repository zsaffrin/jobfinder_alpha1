import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res, next) => {
  res.json('Success!');
});

const port = 4382;
app.listen(port, () =>
  console.info(`JobFinder backend running on port ${port}`)
);
