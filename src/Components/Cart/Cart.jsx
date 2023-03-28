import React from 'react';

const Cart = ({cart}) => {
    // const cart = props.cart;
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart){
        // if (product.quantity === 0) {
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity || 1;

        total = total + product.price * product.quantity;
        totalShipping  =  totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = total*7/100;
    const grandTotal = total + totalShipping + tax;
    
    return (
        <div className=' p-10 sticky top-0  bg-orange-200 m-12'>
            <h2 className='text-xl text-center'>Order Summary</h2>
            <p className='text-xl mt-6'>Selected Items: {quantity}</p>
            <p className='text-xl mt-6'>Total Price: ${total}</p>
            <p className='text-xl mt-6'>Total Shipping: ${totalShipping}</p>
            <p className='text-xl mt-6'>Tax: {tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};



export default Cart;