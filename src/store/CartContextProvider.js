import CartContext from "./cartContext";
import {useState} from "react";


const CartContextProvider = props =>{
    const  [items, setItems] = useState([])

    const addItemHandler = (item) => {
        const checkItemIndex = items.findIndex(i => {
            return i.id === item.id
        })
        if (checkItemIndex === -1){
            setItems(prevState => [...prevState, item])
        }
    }

    const removeItemHandler = (id) => {
        setItems(
            items.filter(item=> item.id !== id)
        )
    }

    const cartContextProps = {
        items:items,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return <CartContext.Provider value={cartContextProps}>{props.children}</CartContext.Provider>
}

export default CartContextProvider