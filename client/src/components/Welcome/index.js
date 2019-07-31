import React from "react";
import {Container, Row, Col} from "../Grid";
import { Link } from 'react-router-dom';
import "./style.css";


let Welcome = () =>{
    return(
        
        <Container>
            <div id="box">
                <Row>
                    <h3 id="title"> Welcome to The Stylist</h3>
                </Row>
                <Row>
                    <p id="blurb"> The average woman spends <span class="pink"> 6 months</span> of her working life, picking out clothes to wear. Time is money, and 
                    we believe that no one should be charged so heinously to look and feel <span class="pink">strong, confident, and fierce</span>.<br />
                    We've created The Stylist as a solution to this problem. This application offers a unique interface to connect users with personal stylist.</p>
                </Row>
                <Row>
                    <Col size="md-6">
                    <p class="pink">User Benefits: </p>
                    <ul>
                        <li>Easy access to thousands of stylist</li>
                        <li>Recieve portfolios personalized to your requirements</li>
                        <li>Connect via Video Chat</li>
                    </ul>
                    </Col>
                    <Col size="md-6">
                    <p class="pink">Stylist Benefits: </p>
                    <ul>
                        <li>Easy access to thousands of clients</li>
                        <li>Create personalized portfolios in minutes </li>
                        <li>Connect via Video Chat</li>
                    </ul>
                    </Col>
                </Row>
                <Row>
                <Col size="md-6">
                <p>Already a Member? <Link to="/login"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Login here</Link></p></Col>
                <Col size="md-6">
                <p>Not a member? <Link to="/register"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Register here</Link></p></Col>
                </Row>

            </div>
        </Container>

       
    )
}

export default Welcome;