import {useEffect, useState} from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import Shop from "./components/shop/Shop";
import CartButton from "./components/cart/CartButton";
import CartContextProvider from "./store/CartContextProvider";
import Cart from "./components/cart/Cart";
function App() {
    const [cartDisplay, setCartDisplay] = useState(false)
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://fortniteapi.io/v2/shop?lang=en', {headers:{
                'Authorization': "d627bba4-0e650502-9d896f2c-3a639cbb",
            }}).then(response => response.json()).then(data => {
            data.shop && setItems(data.shop);
            setLoading(prevState => !prevState);
        })
    }, [])

    const itemsFilterHandler = (search) => {

        const filteredItems = items.filter(
            item => {
                return item.displayName.toLowerCase().includes(search.toLowerCase())
            }
        )
        if(filteredItems.length === 0){
            alert('Nothing found :( Try again')
        }
        setFilteredItems(filteredItems)
    }

    const changeCartDisplayHandler = () => {
        setCartDisplay(prevState => !prevState)
    }

  return (
    <CartContextProvider>
        <Header onSearch = {itemsFilterHandler}/>
        <CartButton onDisplayCart = {changeCartDisplayHandler}/>
        {cartDisplay? <Cart onDisplayCart = {changeCartDisplayHandler}/>: null}
        <Shop items={filteredItems.length !== 0? filteredItems : items } loading={loading}/>
        <Footer/>
    </CartContextProvider>
  );
}

export default App;

