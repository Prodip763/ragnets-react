import React, { useContext, useReducer } from 'react';
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { initialState, productReducer } from '../state/productReducer';
import { actionType } from '../state/actionType';

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({children}) => {
    
  
  const [state, dispatch] = useReducer(productReducer, initialState);
  console.log(state);
  useEffect(() => {
    dispatch({type: actionType.FETCHING_START})
    axios.get("http://fakestoreapi.com/products")
      .then((data) => dispatch({type : actionType.FETCHING_SUCCESS, payload: data.data}))
      .catch(() => {
        dispatch({type: actionType.FETCHING_ERROR})
      });

    // fetch("http://fakestoreapi.com/products")
    // .then(res => res.json())
    // .then((data) => setData(data.data))
  }, []);
  const value = {
    state, dispatch
  }
    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};

export const useProducts = () =>{
    const context = useContext(PRODUCT_CONTEXT)

    return context;
}

export default ProductProvider;