import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';

import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {


    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([])
    useEffect(() => {
        fetch('products.json').then(res => res.json()).then(data => {setProducts(data)})
    },[])

  
    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        //step 1: get id of the addedProduct
        for(const id in storedCart){
            //step 2: get product from products state by using id
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                // step 3 : add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
            console.log('added product' ,addedProduct);
        }
        //step 5: set the cart
        setCart(savedCart)
    },[products])


        const handleAddToCart = (product) => {
            const newCart = [...cart,product];
            setCart(newCart);
            addToDb(product.id)
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;