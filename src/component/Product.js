import Card from './Card';
import { useProducts } from '../context/ProductProvider';

const Product = () => {
    const { state: { products, loading, error }, } = useProducts();
    let content;
    if (loading) {
        content = <p>Loading...</p>
    }
    if (error) {
        content = <p>Something went wrong</p>
    }
    if (!loading && !error && products.length === 0) {
        content = <p>Product list is empty!!</p>
    }
    if (!loading && !error && products.length) {
        content = <div className='md: grid grid-cols-3 m-6 gap-2'>
            {products?.map(data => <Card key={data.id} data={data}></Card>)}
        </div>
    }

    return (
        <div>
            {content}
        </div>

    );
};

export default Product;