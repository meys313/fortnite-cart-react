import './preloader.scss'
const Preloader = () =>{
    return(
        <div className="preloader">
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
export default Preloader