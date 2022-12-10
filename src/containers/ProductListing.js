import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';


const ProductListing = () => {

    const products = useSelector((state)=>state);
    const dispath = useDispatch();

    const fetchProducts = async ()=>{
        const response = await axios.get("https://fakestoreapi.com/products")
            .catch((err)=>{
                    console.log("Err",err);
                });

        dispath(setProducts(response.data));
    };

    useEffect(()=>{
        fetchProducts();
    },[])

    console.log("Products: ",products);

  return (
    <div className='ui grid container'>
        <ProductComponent/>
    </div>
  )
}

export default ProductListing