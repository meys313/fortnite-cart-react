import {useState, useEffect} from "react";
import './shop.scss';
import Preloader from "../../UI/preloader/Preloader";
import ShopList from "./ShopList";
const Shop = (props) => {

    return(
        <main className="shop">
            {
                props.loading? <Preloader/>: <ShopList items={props.items}/>
            }
        </main>
    )
}

export default Shop