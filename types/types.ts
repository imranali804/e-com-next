// types/types.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;  // Changed from imagePath to match API
  // Add optional properties if needed
  category?: string;
  discountPercentage?: number;
  stockLevel?: number;
  isFeaturedProduct?: boolean;
}