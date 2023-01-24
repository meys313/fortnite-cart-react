import './shop-item.scss';
import {useContext} from "react";
import CartContext from "../../store/cartContext";
const ShopItem = (props) => {
    const {
        mainId:id,
        displayName:name,
        displayDescription:desc,
        price,
        displayAssets:assets

    } = props;

    const cartContext = useContext(CartContext);

    const onAddItemHandler = () => {
        cartContext.addItem([id, name, desc, price]);
    }

    return(
        <div className="card shop-item">
            <img src={assets[0]['full_background']} className="card-img-top" alt={name}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text shop-item__desc">
                        {desc?desc:"This item has no description"}
                    </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item shop-item-price">price: <span>{price['regularPrice']}</span></li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
                <div className="card-body shop-item__buttons">
                    <a href="#" className="card-link">Card link</a>
                    <button type="button" className="btn btn-success" onClick={onAddItemHandler}>Add</button>
                </div>
        </div>
    )
}

export default ShopItem