import React from "react";
import {Container, Row, Col} from "../Grid"
import "./style.css";


let checkDisplay = object =>{
    let display=[];

    if (object.top!==""){
        display.push({
            item: object.top,
            type: "top"
        })
    }
    if (object.bottom!==""){
        display.push({
            item: object.bottom,
            type: "bottom"
        })
    }
    if (object.dress!==""){
        display.push({
            item: object.dress,
            type: "dress"
        })
    }
    if (object.shoes!==""){
        display.push({
            item: object.shoes,
            type: "shoes"
        })
    }
    if (object.accessories!==""){
        display.push({
            item: object.accessories,
            type: "accessories"
        })
    }
    console.log(display);
    return display;
}

let DisplayState = (props) =>{
    let items ={
        top: props.top,
        bottom: props.bottom,
        dress: props.dress,
        shoes: props.shoes,
        accessories: props.accessories
    }
    //console.log(items)
    let display = checkDisplay(items);
    //console.log(display);
    return(
        <div>
            <h3>Your Outfit</h3>
            <Row>
            {
                display.map(displays =>{
                   return (
                       <Col size="md-3">
                            <div key={displays.type}>
                                <img className="outfitImg" src={displays.item}/>
                                <button type="button" className="btn removeBtn" id={displays.type} onClick={props.handleRemoveState}> X </button>
                            </div>
                       </Col>
                   )
                })
            }
            </Row>
            <button type="button" className="btn send2Client" onClick={props.handleSend2Client}> Send Outfit to Client </button>
        </div>
    )
}

export default DisplayState;