// polyfills
import 'isomorphic-fetch';

import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const port = (process.env.API_PORT || 3001);

app.listen(port, function () {
  console.log('API running on port ' + port + '.');
});
