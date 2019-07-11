import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";

function CardClientInfo(props) {
    return (
        <div className="card" key={props.key}>
            <h4>{props.name}</h4><br/>
            <h7>Hair: {props.hair}</h7><br/>
            <h7>Eyes: {props.eye}</h7><br/>
            <h7>Body Type: {props.bodyType}</h7><br/>
            <h7>Personal Style: {props.style}</h7><br/>
            <h7>Style Icon: {props.icon}</h7><br/>
            <h7>Favourite Color: {props.color}</h7><br/>
            <h7>Best Feature: {props.feature}</h7><br/>
            <Link to={`/stylist/${props.myID}/outfit/${props.name}/${props.id}`} >
                <button type="button" className='btn'>Send Outfit</button>
            </Link>
            

        </div>
    );
}

export default CardClientInfo;
