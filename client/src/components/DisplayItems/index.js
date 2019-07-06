import React from "react";
import { PromiseProvider } from "mongoose";

let DisplayItems = (props) =>{
    return(
        <div>
            {
                props.images.map( image =>{
                    return (
                        <div>
                            <img src={image.image} onClick={props.handleImageClick} />
                        </div>
                )})
            }
        </div>
    )
}

export default DisplayItems;