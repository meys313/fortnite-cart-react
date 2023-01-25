import './shop-item.scss';
import {useContext, useState, useEffect} from "react";
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

    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [styleEffect, setStyleEffect] = useState({});

    const onAddItemHandler = () => {
        if (!buttonDisabled){
            setButtonDisabled(prevState => !prevState)
        }
        cartContext.addItem({id, name, desc, price, assets});
    }


    useEffect(()=>{
        if (!buttonDisabled){
            return
        }
        setStyleEffect(prevState => {return{...prevState, opacity:1,bottom: "50%" }})

        const timer = setTimeout(()=>
            setStyleEffect(prevState => {return {...prevState, opacity:0}}), 500)

        return () => {
            clearTimeout(timer)
        }

    }, [buttonDisabled])

    return(
        <div className={`card shop-item ${props.itemLength <= 2 ? "crutch": null}`}>
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


                    <div className="alert alert-success" style={styleEffect} role="alert">
                        Item added
                    </div>

                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={onAddItemHandler}
                        disabled={buttonDisabled}

                    >Add</button>
                </div>
        </div>
    )
}

export default ShopItem