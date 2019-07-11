import React, { Component } from "react";
import API from "../../utils/API";
import Card from "../../components/Card";
import {Container, Row, Col} from "../../components/Grid"
//import StylistData from '../../stylist.json';

class Dashboard extends Component {
    state = {
        image: "",
        match: false,
        matchCount: 0
    };


    // When the component mounts, load the next dog to be displayed
    componentDidMount() {
        this.loadNextDog();
    }

    handleBtnClick = event => {
        // Get the data-value of the clicked button
        const btnType = event.target.attributes.getNamedItem("data-value").value;
        // Clone this.state to the newState object
        // We'll modify this object and use it to set our component's state
        const newState = { ...this.state };

        if (btnType === "pick") {
            // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
            newState.match = 1 === Math.floor(Math.random() * 5) + 1;

            // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
            newState.matchCount = newState.match
                ? newState.matchCount + 1
                : newState.matchCount;
        } else {
            // If we thumbs down'ed the dog, we haven't matched with it
            newState.match = false;
        }
        // Replace our component's state with newState, load the next dog image
        this.setState(newState);
    };

    loadNextDog = () => {
        API.getClientInfo()
            .then(res =>
                console.log(res)
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Container>
                    <div id="box">
                    <Row>
                        <h3 class="title">Prospective Clients</h3>
                        <p class="desc"> To interact with these prospect clients, you must first create an outfit for them and wait for their reply. Click on the tile to create their outfit</p>
                    </Row>
                    <Row>
                        {/* cards will go here */}
                    </Row>
                    <Row>
                        <hr />
                    </Row>
                    <Row>
                        <h3 class="title">Current Clients</h3>
                        <p class="desc"> Click on your client's name to start a video call.</p>
                    </Row>

                    </div>

                </Container>
            </div>
        );
    }
}


    export default Dashboard;
