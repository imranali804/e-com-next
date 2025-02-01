import { assert } from "console";


export interface Product {
    _id : string;
    Name : string
    _type :" product";
    image? : {
        asset : {
            _ref : string ;
            _type : "image"
            
        }
    }
    price : number 
    description? : string

    
}