import React, { Component } from 'react';
import unirest from "unirest";
import { Container, Row } from "../../components/Grid";
import SearchItems from "../../components/SearchItems";
import "./style.css";

class StylistCreateOutfit extends Component {
    state = {
        search: "",
        result: [],
        error: ""
    };

    handleInputChange = event =>{
        event.persist();
        console.log(event);
        this.setState({search: event.target.value});
    }

    handleSearchItems = event =>{
        event.preventDefault();
        console.log(event);
        console.log(this.state.search);
        unirest.get("https://brianiswu-unofficial-asos-com-v1.p.rapidapi.com/product/search/v1/?q="+this.state.search+"&sort=freshness&offset=0&limit=100&sizeschema=EU&currency=EUR&store=1&lang=en-GB&channel=mobile-app")
        .header("X-RapidAPI-Host", "brianiswu-unofficial-asos-com-v1.p.rapidapi.com")
        .header("X-RapidAPI-Key", "85a2a4a385msh0863e62b920cbb7p16e8a3jsn3e8230364f10")
        .end(function (result) {
        console.log(result.status, result.headers, result.body);
        });
    }

    render(){
        return (
            <div id="createOutfitMain">
                <Container>
                    <Row>
                        <h1>Create an Outfit</h1>
                    </Row>
                    <Row>
                        <SearchItems handleInputChange={this.handleInputChange} handleSearchItems={this.handleSearchItems} />
                    </Row>
                </Container>
            </div>
        )
    }


}

export default StylistCreateOutfit;