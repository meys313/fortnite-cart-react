import './cart-item.scss'
import {useContext} from "react";
import CartContext from "../../store/cartContext";

const CartItem = props =>{

    const cartContext = useContext(CartContext);
    const {id, name, desc, price, assets} = props.item
    const onRemoveItemHandler = (id) => {
        cartContext.removeItem(id)
    }
    return (
        <div className="cart-item">
            <img className="cart-item--img" src={assets[0]['full_background']} alt={name}/>



            <div className="cart-item--name"><span>name:</span> {name}</div>



            <p className="cart-item--desc"><span>description:</span> {desc}</p>


            <div className="cart-item--price"><span>price in game:</span> {price['regularPrice']}</div>

            <button type="button" className="btn-close" aria-label="Close" onClick={()=> onRemoveItemHandler(id)}></button>
        </div>
    )
}
export default CartItem