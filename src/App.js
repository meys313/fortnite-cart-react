import {useState} from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import Shop from "./components/shop/Shop";
import CartButton from "./components/cart/CartButton";
import CartContextProvider from "./store/CartContextProvider";
import Cart from "./components/cart/Cart";

function App() {
    const [cartDisplay, setCartDisplay] = useState(false)

    const changeCartDisplayHandler = () => {
        setCartDisplay(prevState => !prevState)
    }

  return (
    <CartContextProvider>
        <Header/>
        <CartButton onDisplayCart = {changeCartDisplayHandler}/>
        {cartDisplay? <Cart onDisplayCart = {changeCartDisplayHandler}/>: null}
        <Shop/>
        <Footer/>
    </CartContextProvider>
  );
}

export default App;

