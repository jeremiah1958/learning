import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ProductList = ()=>{
    const[products, setProduct] = useState([])
    const fetchProducts = async()=>{
        const response = await fetch("https://rickandmortyapi.com/api/character")
        const data = await response.json();
        setProduct(data.results)
    }
    useEffect(()=>{
        fetchProducts
    }, [])
    return(
        <div>
            {
                products.map((product)=>{
                    return(
                        <div key={product.id}>
                            <Link to={`/product/${product.id}`} state={product} >View Product</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ProductList