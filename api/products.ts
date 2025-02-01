import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch('https://next-ecommerce-template-4.vercel.app/api/product', {
      headers: {
        // Add any required headers here
      }
    });
    
    const data = await response.json();
    
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.status(200).json(data);
    
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
  
}