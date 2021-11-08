
const addToDb = id => {
    const store_card = getStoreCard()

    if (id in store_card) {
        store_card[id] += 1
    }
    else {
        store_card[id] = 1
    }

    updateDb(store_card)
}


const removeFromDb = id => {
    const storeCard = getStoreCard()
    delete storeCard[id]
    updateDb(storeCard)
}


const updateDb = card => {
    localStorage.setItem('shopping_card', JSON.stringify(card))
}


const getStoreCard = () => {
    const existing = localStorage.getItem('shopping_card')
    return existing ? JSON.parse(existing) : {}
}

const clearStoreCard = () => localStorage.removeItem('shopping_card')



const incrementDb = id => {
    const oldCard = getStoreCard()
    oldCard[id] += 1
    updateDb(oldCard)
}




export { addToDb, getStoreCard, removeFromDb, clearStoreCard, incrementDb }