import { useState } from "react";
import { data } from "./data";
import Buttons from "./Buttons";
import Goods from "./Goods";

function Main() {

    const [product, setProduct] = useState(data);

    const selectProduct = (about) => {
        const newProduct = data.filter(element => element.about === about);
        setProduct(newProduct);
    }

    return(<div>
    <h1>Категории</h1>
    <Buttons selectProduct = {selectProduct}/> 
    <Goods itemProduct = {product}/>
    </div>
    )
};

export default Main;
