 "use client"
import Shop from "@/app/shop/page"
import { client } from "@/sanity/lib/client"
import { allproducts } from "@/sanity/lib/queries"
import { Product } from "@/types/Products"
import { use, useEffect, useState } from "react"





 const SHOP = () => {
      const [product,setProduct] = useState<Product[]>([])

      useEffect (() => {
        async function fetchproduct (){
            const fetchedproduct: Product [] = await client.fetch(allproducts)
            setProduct(fetchedproduct)
        }
        fetchproduct ()
      },[])
      return (
        <div className="Max-w-6xl mx-auto px-4 py-8">
        {product.map ( (product) => (
        <div key={product._id}>
        {product.Name}
        </div>
        )

        ) }
            
        </div>
      )

 }
 export default Shop