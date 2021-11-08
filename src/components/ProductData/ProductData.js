import React from 'react';
import useCard from '../../hooks/useCard';
import useProduct from '../../hooks/useProduct';
import { clearStoreCard, decrementDb, incrementDb, removeFromDb } from '../../localStore/localStore';
import ProductDitels from '../ProductDitels/ProductDitels';
import TotalValue from '../totalValue/TotalValue';

const ProductData = () => {
    const [products] = useProduct()
    const [card, setCard] = useCard(products);
    console.log(card)



    const handleRemoveItem = product => {
        const removeProduct = card.filter(pd => pd._id !== product)

        setCard(removeProduct)
        removeFromDb(product)
    }


    const handleClearCard = () => {
        setCard([])
        clearStoreCard()
    }



    return (
        <div className=" flex  ">

            <div className=" md:w-5/6  w-1/2 ">
                <div className="  ">
                    {
                        card.map((item, index) => <ProductDitels
                            key={index}
                            item={item}
                            handleRemoveItem={handleRemoveItem}


                        ></ProductDitels>)
                    }
                </div>
            </div>
            <div className="    flex justify-center  border-l-2   w-1/2  ">
                <div className="ml-5  m-2">


                    <TotalValue card={card}>
                        <button onClick={handleClearCard} className="w-full text-white bg-yellow-600 p-2 rounded-md"> Proceed Checkout</button>
                    </TotalValue>

                </div>

            </div>


        </div>
    );
};

export default ProductData;