import {ActionTypes} from "../constants/action-types";
import axios from "axios";


export const setProducts = () =>{
    return async (dispatch,getState)=>{
    const response = await axios.get("https://fakestoreapi.com/products")
        .catch((err)=>{
            console.log("Err",err);
        });
    dispatch({ 
        type: ActionTypes.SET_PRODUCTS,
        payload: response.data,
    })
    }
};

export const getProduct = (id) =>{
    return async (dispatch,getState)=>{
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        .catch((err)=>{
            console.log("Err",err);
        });
    console.log(response);
    dispatch({ 
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: response.data,
    })
    }
};
  

// export const setProducts = (products) =>{
//     return {
//         type: ActionTypes.SET_PRODUCTS,
//         payload: products,
//     }
// };

export const selectProduct = (product) =>{
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: product,
    }
};

export const removeSelectProduct = () =>{
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
    }
};