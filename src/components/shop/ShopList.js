import './shop-list.scss'
import ShopItem from "./ShopItem";
const ShopList = (props) => {
    const {items = []} = props;

    const getItem = () => {
        const itemsCopy = [...items]
        const itemsArr = []
        return () => {
            while(itemsCopy.length) {
                const fourItems = itemsCopy.splice(0, 4);
                itemsArr.push(fourItems);
            }
            return(
                <div className="shop-list container">
                    {
                        itemsArr.map(
                            items => {
                                return (
                                    <div key={Math.random().toString()} className="row">
                                        {
                                            items.map(
                                                item => {
                                                    return(
                                                        <div key={item.mainId} className="col-md">
                                                            <ShopItem {...item}/>
                                                        </div>
                                                    )
                                                }
                                            ) //items.map
                                        }
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            )


        } // innerFunc
    }
    return(
        <>
            {
               getItem()()
            }
        </>
    )

}

export default ShopList