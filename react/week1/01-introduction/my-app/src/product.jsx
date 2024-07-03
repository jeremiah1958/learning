import { useparams } from "react-router-dom";
const Product = ()=>{
    const{productId} = useparams();
    return(
        <div>
            <h1>showing product {productId}</h1>
        </div>
    )
}
export default Product






