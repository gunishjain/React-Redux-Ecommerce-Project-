import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';


const ProductListing = () => {

    const products = useSelector((state)=>state);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setProducts());
    },[])

    console.log("Products: ",products);

  return (
    <div className='ui grid container'>
        <ProductComponent/>
    </div>
  )
}

export default ProductListing