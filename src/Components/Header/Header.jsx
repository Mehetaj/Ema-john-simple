import React from 'react';
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <div className='h-[80px] flex justify-between items-center text-white pl-[100px] pr-[100px] bg-[#1C2B35]'>
            <div>
            <img src={logo} alt="" />
            </div>
            <div className=''>
            <a className='ml-[30px] hover:text-orange-500' href="/shop">Shop</a>
            <a className='ml-[30px] hover:text-orange-500' href="/order">Order</a>
            <a className='ml-[30px] hover:text-orange-500' href="/inventory">Inventory</a>
            <a className='ml-[30px] hover:text-orange-500' href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;