import React from "react";
import "./style.css";

function CardClientInfo(props) {
    return (
        <div
            className="card"
            style={{
                backgroundImage: props.image ? `url(${props.image})` : "none"
            }}
        >
        </div>
    );
}

export default CardClientInfo;
