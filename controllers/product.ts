import express,{ Request, Response,} from 'express';
import { Product, products } from './productData';

export const productsRouter = express.Router();

// GET /api/products
productsRouter.get('/', (req: Request, res: Response) => {
  res.json(products);
});

// GET /api/products/:id
productsRouter.get('/:id', (req: Request, res: Response) => {
  const productId = req.params.id;
  const product = products.find((p) => p.id === parseInt(productId));

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// POST /api/products
productsRouter.post('/', (req: Request, res: Response) => {
  const newProduct: Product = {
    id: products.length + 1,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT /api/products/:id
productsRouter.put('/:id', (req: Request, res: Response) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === productId);
  if (productIndex !== -1) {
    products[productIndex] = {
      id: productId,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
    };

    res.json(products[productIndex]);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// DELETE /api/products/:id
productsRouter.delete('/:id', (req: Request, res: Response) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === productId);

  if (productIndex !== -1) {
    const deletedProduct = products.splice(productIndex, 1);
    res.json(deletedProduct[0]);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});
