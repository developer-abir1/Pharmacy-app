import React, { useState } from 'react';
import useProduct from '../../../hooks/useProduct';
import './header.css'

const Header = (props) => {
    const { handleChange } = props;

    return (
        <section className="header-section flex justify-center align-items-center">
            <div className="flex ">

                <input type="text" onChange={handleChange} className="  sm:w-96 focus:border-green-300 rounded-t-md rounded-l-md  border-yellow-300 border-l-0 rounded-r-none border-2 text-center" placeholder="search product" />
                <button className="p-2 bg-yellow-600  rounded-r-md text-2xl text-white"> Search</button>
            </div>
        </section>
    );
};

export default Header;