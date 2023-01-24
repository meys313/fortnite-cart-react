import {useState, useEffect} from "react";
import './shop.scss';
import Preloader from "../../UI/preloader/Preloader";
import ShopList from "./ShopList";
const Shop = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://fortniteapi.io/v2/shop?lang=en', {headers:{
            'Authorization': "d627bba4-0e650502-9d896f2c-3a639cbb",
            }}).then(response => response.json()).then(data => {
               data.shop && setItems(data.shop);
               setLoading(prevState => !prevState);
        })
    }, [])

    console.log(items)
    return(
        <main className="shop">
            {
                loading? <Preloader/>: <ShopList items={items}/>
            }
        </main>
    )
}

export default Shop