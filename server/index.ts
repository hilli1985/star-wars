import express, { Request, Response } from 'express';
import mainRoutes from './src/routes';
const cors = require('cors');


const app = express();
const port = 3001;

// Enable CORS for all routes
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.use('/', mainRoutes);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});