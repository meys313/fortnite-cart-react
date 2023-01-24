import CartContext from "./cartContext";
import {useState} from "react";


const CartContextProvider = props =>{
    const  [items, setItems] = useState([])

    const addItemHandler = (item) => {
        setItems(prevState => [...prevState, item])
    }

    const removeItemHandler = () => {

    }

    const cartContextProps = {
        items:items,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return <CartContext.Provider value={cartContextProps}>{props.children}</CartContext.Provider>
}

export default CartContextProvider