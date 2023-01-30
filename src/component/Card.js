import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ data }) => {
    const { title, id, price, category, image, rating } = data;
    const navigate = useNavigate();
    const productDetails = id => {
        navigate(`/item/${id}`)
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
                    <p>Price: {price}</p>

                    <div className="card-actions">
                        <button onClick={() => productDetails(id)} className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>


            {/* <div className="card lg:card-side bg-base-100 shadow-xl top-6">
                <figure></figure>
                <div className="card-body">
                    <h2 className="card-title"></h2>
                    <p></p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Card;