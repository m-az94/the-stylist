import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div
            className="card"
>
<img class="card-img-top" src={props.image} alt="Card image cap"/>
        <div className="card-body">
            <h5 class="card-title">{props.name}</h5>
        </div>
        
        </div>
    );
}

export default Card;
