import { useContext } from "react";
import { productContext } from "../context/productContext";
const useProduct = () => {
    const context=useContext(productContext)
    return context
}
 
export default useProduct;