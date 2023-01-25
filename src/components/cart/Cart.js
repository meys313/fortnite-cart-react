import Modal from "../../UI/modal/Modal";
import {useContext} from "react";
import CartContext from "../../store/cartContext";
import CartItem from "./CartItem";
import './cart-items.scss'

const Cart = props => {
    const cartContext = useContext(CartContext)
    return (
        <Modal onDisplayCart = {props.onDisplayCart}>
            <div className="cart-items--header">
                <h3>these are your selected items</h3>
            </div>
            <div className="cart-items">
                {cartContext.items.length !== 0? cartContext.items.map(item => <CartItem item = {item}/>) :
                    <h3 style={{marginLeft: "2rem"}}>no items added :[</h3>
                }
            </div>
            <div className="cart-items--total">
                    <div className="cart-items--count">
                        <div>total items: <span>{cartContext.items.length}</span></div>
                        <button type="button" className="btn btn-outline-dark" onClick={props.onDisplayCart}>Close</button>
                    </div>

            </div>
        </Modal>
    )
}
export default Cart