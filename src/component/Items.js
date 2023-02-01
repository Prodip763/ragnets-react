import React, { useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useProducts } from '../context/ProductProvider';
import { actionType } from '../state/actionType';


const Items = () => {
    const { dispatch} = useProducts()

    const { itemId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://fakestoreapi.com/products/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));

    }, [item, itemId])
    const [num, setNum] = useState(0);
    const handleItem = () => {
        dispatch({type: actionType.ADD_TO_CART, payload: item, num });
        toast('Product added successfully');
    }


    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl mt-2 ">
                <figure><img src={item.image} className="w-80" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p><small>{item.description}</small></p>
                    <p>Price: <span className='font-bold'>{item.price}$</span> </p>
                    <p>Rating: <span className='font-bold'>{item.rating?.rate}</span> </p>
                    <div className="flex gap-3">
                        <button onClick={() => { setNum(num > 0 ? num - 1 : 0) }} className="btn">-</button>
                        <h2 className='text-2xl'><span className='font-bold'>{num}</span></h2>
                        <button onClick={() => { setNum(num + 1) }} className="btn">+</button>

                    </div>
                    <div className="card-actions">
                        <button onClick={() =>handleItem()} className="btn btn-primary">Add Product</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;