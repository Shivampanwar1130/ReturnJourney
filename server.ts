import express from 'express';
import bodyParser from 'body-parser';
import { productsRouter } from './controllers/product';
import {logRequest} from './middleware/logoRequest'

const app = express();
app.use(bodyParser.json());

// Use Middleware
app.use(logRequest);

app.use('/api/products', productsRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
