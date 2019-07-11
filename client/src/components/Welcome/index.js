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
                    <p id="blurb"> The average women spends <span class="pink">20 minutes pick out an outfit for work, evenings, and weekends out and, 
                    52 minutes on holidays and special occasions.</span> In other words, if you're a woman who works 5 days a week, 
                    goes on a dinner date at least once a week, enjoys weekend outings, and has 2 big events a year,
                    that number totals to <span class="pink">8224 hours or almost 6 days,</span> spent on pondering the age old conundrum: 
                    <span class="pink">"Does this shirt go well with these pants?"</span> But what can you do? That's the price you have pay
                    to be comfortable with your appearence. Right?<br />
                    We at The Stylist believe your time is more valuable than that. 
                    We've created an application with a unique interface to help users and stylist find each other.
                    This application revolutionizes consultations. 
                    No need to, review endless portfolios and spend 45 min to an hour, per stylist, while trying to find the right fit for you.
                    Stylist send you a <span class="pink">personalized outfit portfolio.</span>
                    In addition, video conferencing is built into our system, so you can collaborate at your convenience.</p>
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