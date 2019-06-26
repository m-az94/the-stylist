import React from "react";
// import "./style.css";

let SearchItems = props =>{
    return(
        <div>
            <form>
                <label id="searchItemLabel">Select any of the following: </label><br />
                <input type="radio" name="searchItems" value="top" onChange={props.handleInputChange} /><label> Tops</label><br />
                <input type="radio" name="searchItems" value="bottom" onChange={props.handleInputChange} /><label> Bottoms</label><br />
                <input type="radio" name="searchItems" value="dress" onChange={props.handleInputChange}/><label> Dresses</label><br />
                <input type="radio" name="searchItems" value="footwear" onChange={props.handleInputChange} /><label> Footwear</label><br />
                <input type="radio" name="searchItems" value="bag" onChange={props.handleInputChange} /><label> Bags</label><br />
                <input type="radio" name="searchItems" value="accessories" onChange={props.handleInputChange} /><label> Accessories</label><br />
            </form>
            <input type="sumbit" value="submit" onClick={props.handleSearchItems} />
        </div>
    )
}

export default SearchItems;