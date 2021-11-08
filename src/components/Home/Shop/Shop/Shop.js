
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useCard from '../../../../hooks/useCard';
import useProduct from '../../../../hooks/useProduct';
import { addToDb } from '../../../../localStore/localStore';
import Header from '../../Header/Header';
import Product from '../Product/Product';
import ShoppingCard from '../ShoppinCard/ShoppingCard';
import './Shop.css'

const Shop = () => {


    const [products, setProducts] = useProduct();
    const [card, setCard] = useCard(products)
    const [showProduct, setShowProduct] = useState(4);
    const [displayProducts, setDisplayProducts] = useState([])



    const handleAddToCard = (product) => {
        const existing = card.find(pd => pd._id === product._id);
        let newItem = []
        if (existing) {
            const rest = card.filter(pd => pd._id !== product._id);
            existing.quantity = existing.quantity + 1
            newItem = [...rest, product]


        }
        else {
            product.quantity = 1
            newItem = [...card, product]
        }


        setCard(newItem)
        addToDb(product._id)
    }


    const handleShowProduct = (e) => {

        const newCard = showProduct + 4

        setShowProduct(newCard)


        e.preventDefault()




    }

    const searchItem = displayProducts.length === 0 ? products : displayProducts


    const handleChange = (e) => {
        const searchText = e.target.value
        const matchProduct = products.filter(pd => pd.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProducts(matchProduct)
    }

    return (
        <section>
            <Header handleChange={handleChange} />
            <h1 className="mt-5 mb-5 text-2xl font-bold ml-5">Product</h1>
            <div className="grid sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-4 m-2">
                {
                    searchItem.slice(0, showProduct).map((pd, index) => <Product
                        key={index}
                        pd={pd}
                        handleAddToCard={handleAddToCard}

                    ></Product>)
                }


            </div>
            <div className="text-center mt-5 mb-5 ">
                <button onClick={handleShowProduct} className="   border-2 border-green-400 hover:border-transparent hover:bg-green-700 hover:text-white font-bold p-2 rounded-md">See ALL Product</button>
            </div>
            <div>

                <ShoppingCard card={card} > </ShoppingCard>

            </div>
            <div>


            </div>
        </section>
    );
};

export default Shop;