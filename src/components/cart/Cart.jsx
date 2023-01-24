import './cart.scss';
import {useContext} from "react";
import CartContext from "../../store/cartContext";
const Cart = (props)=> {
    const cartContext = useContext(CartContext)
    const {amount=0} = props;
    return(
        <div className="cart">
            <div className="cart__wrapper">
                <i className="bi bi-bag-heart"></i>
                {cartContext.items.length !== 0 ? <div className="cart__amount"><span>{cartContext.items.length}</span></div>: null}
            </div>
        </div>

    )
}

export default Cart