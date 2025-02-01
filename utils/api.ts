// utils/api.ts
export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
  }
  
// utils/api.ts
export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch('/api/products');
  const data = await res.json();
  return data;
};