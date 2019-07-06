import React from "react";

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
    if (!object.dress!==""){
        display.push({
            item: object.dress,
            type: "dress"
        })
    }
    if (!object.shoes!==""){
        display.push({
            item: object.shoes,
            type: "shoes"
        })
    }
    if (!object.accessories!==""){
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
            {
                display.map(displays =>{
                   return (
                    <div key={displays.type}>
                        <img src={displays.item}/>
                        <button type="button" className="btn removeBtn" id={displays.type} onClick={props.handleRemoveState}> X </button>
                    </div>
                   )
                })
            }
        </div>
    )
}

export default DisplayState;