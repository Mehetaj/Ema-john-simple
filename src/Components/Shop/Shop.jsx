import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {


    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([])
    useEffect(() => {
        fetch('products.json').then(res => res.json()).then(data => {setProducts(data)})
    },[])


        const handleAddToCart = (product) => {
            const newCart = [...cart,product];
            setCart(newCart);
        }
        


    return (
        <div className='shop-container'>

            {/* Product container */}

            <div className='product-container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-[45px] m-[50px]'>


        {
            products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>)
        }


            </div>

        {/* Cart container */}

            <div className='cart-container'>
                <h3 className='text-2xl '>Order Summary</h3>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;