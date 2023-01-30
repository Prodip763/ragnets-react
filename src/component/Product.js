import Card from './Card';
import useProduct from "../component/hooks/useProduct"

const Product = () => {
    const [datas] = useProduct();
    return (
        <div className='md: grid grid-cols-3 m-6 gap-2'>
            {datas?.map(data => <Card key={data.id} data={data}></Card>)}
        </div>
    );
};

export default Product;