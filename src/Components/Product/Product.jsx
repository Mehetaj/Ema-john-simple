import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props);
    const {img,name,seller,quantity,price,ratings} = props.product;

   const handleAddToCart = props.handleAddToCart;
    return (
        <div className='w-[300px]  h-full border  border-sky-200 rounded-md'>
            
            <img className='w-[286px] h-[286px] m-[7px] rounded-md' src={img} alt="" />

          <div className='product-info h-[120px] ml-[14px]'>
          <h6 className='product-name font-bold '>{name}</h6>

         <p>Price: ${price}</p>
         <p>Manufacturer: {seller}</p>
         <p>Rating: {ratings} Stars</p>
          </div>

        <div className='flex'>
        <button onClick={()=>handleAddToCart(props.product)} className='bg-[#FFE0B3] bottom-0  rounded-md py-3 mt- w-full hover:bg-orange-300'>Add to cart      
        </button>
        </div>

        </div>
    );
};

export default Product;