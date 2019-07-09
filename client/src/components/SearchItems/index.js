import React from "react";
import {Container, Row, Col} from "../Grid"
import "./style.css"
// import "./style.css";

let SearchItems = props =>{
    return(
        <div id="search">
                <Container>
            <form id="form">
                <Row >
                <label id="searchItemLabel">Select one of the following: </label>
                </Row>
                <Row>
                    <Col size="md-2">
                        <input type="radio" name="searchItems" value="tops" onChange={props.handleInputChange} /><label> Tops</label>
                    </Col>
                    <Col size="md-2">
                        <input type="radio" name="searchItems" value="bottoms" onChange={props.handleInputChange} /><label> Bottoms</label>
                    </Col>
                    <Col size="md-2">
                        <input type="radio" name="searchItems" value="dresses" onChange={props.handleInputChange}/><label> Dresses</label>
                    </Col>
                    <Col size="md-2">
                        <input type="radio" name="searchItems" value="shoes" onChange={props.handleInputChange} /><label> Shoes</label>
                    </Col>
                    <Col size="md-2">
                        <input type="radio" name="searchItems" value="accessories" onChange={props.handleInputChange} /><label> Accessories</label>
                    </Col>
                </Row>
            </form>
            <Row>
                <br/>
            <button className="btn" type="sumbit" value="submit" onClick={props.handleSearchItems} >Submit</button>
            </Row>
        </Container>
        </div>
    )
}

export default SearchItems;