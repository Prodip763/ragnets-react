import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Items = () => {
    const { itemId } = useParams();
    console.log("item", itemId);
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://fakestoreapi.com/products/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));

    }, [item, itemId])
    const [num, setNum] = useState(0);
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl ">
                <figure><img src={item.image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p><small>{item.description}</small></p>
                    <p>Price: <span className='font-bold'>{item.price}</span> </p>
                    <p>Rating: <span className='font-bold'>{item.rating?.rate}</span> </p>
                    <div className="flex gap-3">
                        <button onClick={() => { setNum(num + 1) }} className="btn">+</button>
                        <h2 className='text-2xl'><span className='font-bold'>{num}</span></h2>
                        <button onClick={() => { setNum(num > 0 ? num - 1 : 0) }} className="btn">-</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;