import React, { useEffect, useState } from 'react';
import { Product } from '../../models/Product';
import './ProductList.css';
import { fetchProducts } from '../../services/api.service';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-grid">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>${product.price.toFixed(2)}</p>
          <small>Rating: {product.rating.rate} ⭐ ({product.rating.count})</small>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
