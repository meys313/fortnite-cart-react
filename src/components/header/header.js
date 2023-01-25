import "./header.scss"
import Search from "./Search";
const Header = (props)=>{
    return(
        <nav className="navbar navbar-expand-lg header text-light">
            <div className="container-fluid">
                <a className="navbar-brand header-brand" href="src/components/header#">Fortnite item</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <i className="bi bi-list" style={{color:"#fff", fontSize:"2rem"}}></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="src/components/header#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="src/components/header#">Link</a>
                        </li>
                    </ul>
                    <Search onSearch ={props.onSearch}/>
                </div>
            </div>
        </nav>
    )
}

export default Header