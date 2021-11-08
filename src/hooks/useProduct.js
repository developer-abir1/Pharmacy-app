import { useEffect, useState } from "react"

const useProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {

        fetch('https://mocki.io/v1/1a5ee949-53ac-4cd9-8fd9-6c066dbaa6fe')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    return [products, setProducts]
}

export default useProduct