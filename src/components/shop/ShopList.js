import './shop.scss'
import ShopItem from "./ShopItem";
const ShopList = (props) => {
    const {items = []} = props;
    return(
        <div className="shop-list">
            {
                items.map(
                    item => <ShopItem key={items.mainId} {...item}/>
                )
            }
        </div>
    )

}

export default ShopList