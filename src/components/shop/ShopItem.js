import './shop.scss'
const ShopItem = (props) => {
    const {
        mainId,
        displayName,
        displayDescription,
        price,
        displayAssets

    } = props;

    return(
        <div className="card shop-item" style={{width: "18rem"}}>
            <img src={displayAssets[0]['full_background']} className="card-img-top" alt={displayName}/>
                <div className="card-body">
                    <h5 className="card-title">{displayName}</h5>
                    <p className="card-text">
                        {displayDescription}
                    </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
        </div>
    )
}

export default ShopItem