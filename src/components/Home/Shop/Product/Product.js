import React from 'react';

const Product = (props) => {
    const { name, price, picture } = props.pd
    const { handleAddToCard } = props

    return (
        <div className="text-center hover:shadow-md p-2 m-2">
            <div className=" flex justify-center align-items-center">
                <img className="w-60  p-2 rounded-t-xl shadow-inner" src={picture} alt={name} />
            </div>
            <div>
                <h3 className="text-xl font-bold mb-2">{name}</h3>
                <p className="p-1 text-gray-400">Lorem ipsum dolor, sit  numquam illum recusandae iusto nostrum?</p>
                <h4 className="text-2xl mb-2">$ {price}.00</h4>
            </div>
            <div className="text-center">
                <button onClick={() => handleAddToCard(props.pd)} className="bg-yellow-400 p-2 rounded-md hover:bg-yellow-500 mb-2 hover:text-gray-50">ADD TO CARD</button>

            </div>
        </div>
    );
};

export default Product;