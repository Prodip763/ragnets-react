import React from 'react';
import { useProducts } from '../context/ProductProvider';
import { actionType } from '../state/actionType';

const RemoveCard = ({ data}) => {
    const { title, price, category, image} = data;
    const { state: { product}, dispatch} = useProducts();



    return (
        <div>
        <div className="card w-auto h-80 bg-base-100 shadow-xl mt-2">
            <figure className="px-10 pt-10">
                <img src={image} className="rounded-xl w-28" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{category}</p>
                <p>Price: {price}$</p>
                <div className="card-actions">
                    <button onClick={() =>dispatch({type: actionType.REMOVE_TO_CART, payload: product})} className="btn btn-primary">Remove Cart</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default RemoveCard;