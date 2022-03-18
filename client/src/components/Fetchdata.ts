import react from "react" 
import axios from "axios";
import { useState } from "react";

export type productType = {
  id?: number;
  name?: string;
  image?: string;
  price?: number;
  description?: string;
  stock?: number;
};
export enum FetchState {
  DEFAULT = "DEFAULT",
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

export const FetchAllProducts = async function () {
    try{
        const data = await axios.get('/api/products');
        console.log(data)
    }catch(error){

    }

//   const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
//   const [products, setProducts] = useState<Array<productType>>([]);

//     const getPosts = async () => {
//       try {
//         const res = await axios.get("http://localhost:3001/api/products");
//         const resData = res.data as Array<productType>;
//         setProducts(resData);
//       } catch (error) {
//         console.log("there was an error");
//       }
//     };

}


//finish and fetch items from backend sign in sign out  
//stripe
//deploy
//5 ui components 
