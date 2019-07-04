import React from "react";
// import "./style.css";

let SearchItems = props =>{
    return(
        <div>
            <form>
                <label id="searchItemLabel">Select one of the following: </label><br />
                <input type="radio" name="searchItems" value="tops" onChange={props.handleInputChange} /><label> Tops</label><br />
                <input type="radio" name="searchItems" value="bottoms" onChange={props.handleInputChange} /><label> Bottoms</label><br />
                <input type="radio" name="searchItems" value="dresses" onChange={props.handleInputChange}/><label> Dresses</label><br />
                <input type="radio" name="searchItems" value="shoes" onChange={props.handleInputChange} /><label> Shoes</label><br />
                <input type="radio" name="searchItems" value="accessories" onChange={props.handleInputChange} /><label> Accessories</label><br />
            </form>
            <input type="sumbit" value="submit" onClick={props.handleSearchItems} />
        </div>
    )
}

export default SearchItems;