import React, { Component } from "react";
import API from "../../utils/API";
import Card from "../../components/CardClientInfo";
import {Container, Row, Col} from "../../components/Grid"
//import StylistData from '../../stylist.json';
import "./style.css";
import { Link } from 'react-router-dom';


class Dashboard extends Component {
    state = {
        image: "",
        match: false,
        matchCount: 0,
        prospectiveClients: [],
        currentClients: [],
        myID: '',
        myName: ""
    };


    // When the component mounts, load the next dog to be displayed
    componentDidMount() {
        const {match: {params}} = this.props;
        this.setState({
            myName: `${params.stylistName}`,
            myID: `${params.stylistID}`});

        API.getClientInfo()
            .then(res =>{
                this.setState({prospectiveClients: res.data})
            }).catch(err => console.log(err));

        API.getCurrentClient(`${params.stylistID}`)
            .then(res => {
                console.log(res.data);
                this.setState({currentClients: res.data})
            }).catch( err => console.log(err));
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

    render() {
        // console.log(this.state.currentClients);
        // console.log(this.state.prospectiveClients);
        //console.log(this.state.prospectiveClients.length);

        let prospects = [];
        let doNotAdd = [];
        let st_prospects = this.state.prospectiveClients;
        let st_clients = this.state.currentClients;
 

        for(let i=0; i<st_prospects.length; i++){
            for(let j=0; j<st_clients.length; j++){
                if (st_prospects[i].clientID === st_clients[j].clientID){
                    doNotAdd.push(i);
                }
            }
        }
    
        for(let k=0; k<st_prospects.length; k++){
            if(doNotAdd.includes(k)){
                // do nothing
            }
            else{
                prospects.push(st_prospects[k]);
            }
        }

        let displayProspects;
        if (this.state.prospectiveClients.length===undefined|| this.state.prospectiveClients.length===0){
            displayProspects = <p class='error'>There are currently no clients looking for stylists</p>
        }
        else{
            displayProspects = prospects.map(client => {
                return(
                    <div>
                        <Col size="md-3">
                            <Card 
                            key={client.clientID} 
                            id={client.clientID} 
                            name={client.name} 
                            hair={client.hairColour}
                            eye={client.eyeColour}
                            bodyType={client.bodyType}
                            style={client.q1}
                            color={client.q2}
                            icon={client.q3}
                            feature={client.q4}
                            myID={this.state.myID}
                            myName={this.state.myName} />
                        </Col>
                    </div>
                )
            })
        }


        let displayCurrents;
        // console.log(this.state.currentClients.length);
        if(this.state.currentClients.length===0|| this.state.currentClients===undefined){
            // console.log("no clients")
            displayCurrents = <p class='error'>You do not have any clients</p>
        }
        else{
            // console.log("some clients")
            displayCurrents = this.state.currentClients.map(client =>{
                return(
                    <div key={client._id}>
                        <Col size="md-3">
                            <Link to={`/meetings/join/${client.clientID}${this.state.myID}`}>
                                <button className="btn btn-primary"> {client.clientName}</button>
                            </Link>
                        </Col>
                    </div>
                )
            })
        }


        return (
            <div>
                <Container>
                    <div id="box">
                    <Row>
                        <h3 class="title">Prospective Clients</h3>
                    </Row>
                    <Row>
                        <p class="desc"> To interact with these prospect clients, you must first create an outfit for them and wait for their reply. Click on the tile to create their outfit</p>
                    </Row>
                    <Row>
                        {displayProspects}
                    </Row>
                    <Row>
                        <h3 class="title">Current Clients</h3>
                    </Row>
                    <Row>
                        <p class="desc"> Click on your client's name to start a video call.</p>
                    </Row>
                    <Row>
                        {displayCurrents}
                    </Row>

                    </div>

                </Container>
            </div>
        );
    }
}


    export default Dashboard;
