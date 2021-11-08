import { useEffect } from "react"
import { useState } from "react"
import { getStoreCard } from "../localStore/localStore"

const useCard = (product) => {
    const [card, setCard] = useState([])

    useEffect(() => {
        if (product.length) {
            const storeCard = getStoreCard()
            console.log(storeCard)
            const saveCard = []
            for (const key in storeCard) {
                const addedProduct = product.find(pd => pd._id === key)

                if (addedProduct) {
                    const quantity = storeCard[key]
                    addedProduct.quantity = quantity
                    saveCard.push(addedProduct)
                }
            }
            console.log(saveCard)
            setCard(saveCard)
        }

    }, [product])
    return [card, setCard]
}
export default useCard