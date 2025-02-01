import { groq } from "next-sanity";


export const allproducts = groq`*[type == "product"]`
export const fourproducst = groq`*[type =="product"][0...3]`