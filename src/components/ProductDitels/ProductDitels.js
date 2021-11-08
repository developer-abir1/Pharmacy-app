import React from 'react';

const ProductDitels = (props) => {


    const { picture, name, price, quantity, _id } = props.item;
    const { handleRemoveItem } = props



    return (

        <div className="sm:hidden:flex md:flex   p-2 m-2  mr-2">

            <div>
                <img className=" w-70 h-56 rounded-xl p-1  " src={picture} alt="" />
            </div>


            <div className=" ml-4 sm:text-center md:text-justify ">
                <h2 className="mb-3 text-center    font-bold  text-xl md:text-2xl mt-2 text-gray-500">{name}</h2>
                <p className="mb-1 mt-1 text-gray-500  hidden md:block"  >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel nobis dolor laudantium nulla perspiciatis beatae fugiat, aliquam dolorum dicta a itaque quaerat ullam veritatis tenetur maiores ut deserunt esse rem dolore. Sit repellendus officia cupiditate est dolor rem aspernatur esse magni ad, et similique nisi numquam soluta, alias quod tenetur!</p>
                <h3 className="mb-2 text-xl font-bold text-red-600"> ${price}</h3>


                <h3 className="mb-2   font-medium md:font-bold text-gray-600"> Quantity : {quantity}</h3>




                <button onClick={() => handleRemoveItem(_id)} className="rounded-md p-2  bg-red-500 hover:bg-red-600 font-medium text-white md:w-2/5 mt-2   w-full">Remove</button>
            </div>

        </div>
    );
};

export default ProductDitels;