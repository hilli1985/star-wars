import express, { Request, Response } from 'express';
import dotenv from "dotenv";

import mainRoutes from './src/routes';
const cors = require('cors');
dotenv.config();

export const app = express();
const port = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('May the force be with you!');
});

app.use('/', mainRoutes);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});