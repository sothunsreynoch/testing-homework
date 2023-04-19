const { useEffect } = require("react")
const { useState } = require("react")

export const ProductCollection = () => {
    const[products, setProducts] = useState([])
    const[loading, setLoading] = useState(true)
    const fetchProduct = () => {
        fetch("https://api.escuelajs.co/api/v1/products")
        .then(resp => resp.json())
        .then(resp => {
            setProducts(resp)
            setLoading(false)
            console.log(products)
        })
        
    }
    useEffect(() =>{
        console.log("Frist fetch")
        fetchProduct()
    
    },[])
    return(
        products.length > 0 && 
    )
}