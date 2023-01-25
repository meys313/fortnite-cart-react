import {useRef} from "react";

const Search = (props) => {

    const inputRef = useRef()
    const searchSubmitHandler = (event) => {
        event.preventDefault()
        const inputValue = inputRef.current.value;
        props.onSearch(inputValue)
    }

    return(
        <form className="d-flex" role="search" onSubmit={searchSubmitHandler}>
            <input ref = {inputRef} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-light" type="submit">Search</button>
        </form>
    )
}
export default Search