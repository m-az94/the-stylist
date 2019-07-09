import React from "react";
import { PromiseProvider } from "mongoose";
import {Container, Row, Col} from "../Grid"
import "./style.css";

let DisplayItems = (props) =>{
    return(
        <div>
            <h3> Item Inventory </h3>
            <Row>
            {
                props.images.map( image =>{
                    return (
                        <Col size="md-3">
                            <div key={image.image}>
                                <img class="productImg" src={image.image} onClick={props.handleImageClick} />
                            </div>
                        </Col>
                )})
            }
            </Row>
        </div>
    )
}

export default DisplayItems;