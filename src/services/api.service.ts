import axios from 'axios';
import { Product } from '../models/Product';

const API_URL = 'https://fakestoreapi.com/products';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(API_URL);
  return response.data;
};