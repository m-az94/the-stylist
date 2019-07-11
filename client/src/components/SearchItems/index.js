import React from "react";
import {Container, Row, Col} from "../Grid"
import "./style.css"


let SearchItems = props =>{
    return(
        <div id="search">
            <form id="form">
                <Row >
                <label id="searchItemLabel">Select one of the following: </label>
                </Row>
                <Row>
                    <Col size="md-2">
                        <input type="radio" name="searchItems" value="tops" onChange={props.handleInputChange} /><p class="p"> Tops</p>
                    </Col>
                    <Col size="md-2">
                        <input type="radio" name="searchItems" value="bottoms" onChange={props.handleInputChange} /><p class="p"> Bottoms</p>
                    </Col>
                    <Col size="md-2">
                        <input type="radio" name="searchItems" value="dresses" onChange={props.handleInputChange}/><p class="p"> Dresses</p>
                    </Col>
                    <Col size="md-2">
                        <input type="radio" name="searchItems" value="shoes" onChange={props.handleInputChange} /><p class="p">Shoes</p>
                    </Col>
                    <Col size="md-2">
                        <input type="radio" name="searchItems" value="accessories" onChange={props.handleInputChange} /><p class="p"> Accessories</p>
                    </Col>
                </Row>
            </form>
            <Row>
                <br/>
            <button className="btn" type="sumbit" value="submit" onClick={props.handleSearchItems} >Submit</button>
            </Row>
        </div>
    )
}

export default SearchItems;