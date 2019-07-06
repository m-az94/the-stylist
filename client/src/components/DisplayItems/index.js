import React from "react";
import { PromiseProvider } from "mongoose";

let DisplayItems = (props) =>{
    return(
        <div>
            <h3> Item Inventory </h3>
            {
                props.images.map( image =>{
                    return (
                        <div key={image.image}>
                            <img  src={image.image} onClick={props.handleImageClick} />
                        </div>
                )})
            }
        </div>
    )
}

export default DisplayItems;