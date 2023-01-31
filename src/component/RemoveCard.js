import React, { useState } from 'react';
import Items from './Items';

const RemoveCard = ({ data }) => {
    const { title, price, category, image} = data;
    const [remove, setRemove] = useState(data);
    const removrToCart = (id) =>{
        setRemove((current) =>
        current.filter((data) => data.id !== id)
      );
    }
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
                    <button onClick={() => removrToCart(data.id)} className="btn btn-primary">Remove Cart</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default RemoveCard;