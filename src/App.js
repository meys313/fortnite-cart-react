import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import Shop from "./components/shop/Shop";
import Cart from "./components/cart/Cart";
import CartContextProvider from "./store/CartContextProvider";
function App() {
  return (
    <CartContextProvider>
        <Header/>
        <Cart/>
        <Shop/>
        <Footer/>
    </CartContextProvider>
  );
}

export default App;

