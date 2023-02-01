import React from 'react';
import { useProducts } from '../context/ProductProvider';
import RemoveCard from './RemoveCard';
const Cart = () => {
    const { state: { cart, loading, error, remove }, } = useProducts();
    let content;
    if (loading) {
        content = <p>Loading...</p>
    }
    if (error) {
        content = <p>Something went wrong</p>
    }
    if (!loading && !error && cart.length === 0) {
        content = <p>Product list is empty!!</p>
    }
    if (!loading && !error && cart.length) {
        content = <div className='md: grid grid-cols-3 m-6 gap-2'>
            {cart?.map(data => <RemoveCard  key={data.id} data={data} remove={remove}></RemoveCard>)}
        </div>
    }

    return (
        <div>
            {content}
        </div>

    );
};

export default Cart;