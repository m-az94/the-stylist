import React, { Component } from 'react';
import API from "../../utils/API";
import { Container, Row } from "../../components/Grid";
import SearchItems from "../../components/SearchItems";
import "./style.css";

class StylistCreateOutfit extends Component {
    state = {
        search: "",
        results: [],
        outfit:{
            top: "",
            bottom: "",
            dress: "",
            shoes: "",
            accessories: ""
        }
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
        let searchTerm = this.state.search;
        switch (searchTerm){
            case "tops":
            API.findTops()
            .then(found => this.setState({results: found}))
            .catch( err => console.log(err));
            break;
            case "bottoms":
            API.findBottoms()
            .then(found => this.setState({results: found}))
            .catch( err => console.log(err));
            break;
            case "dresses":
            API.findDresses()
            .then(found => this.setState({results: found}))
            .catch( err => console.log(err));
            break;
            case "shoes":
            API.findShoes()
            .then(found => this.setState({results: found}))
            .catch( err => console.log(err));
            break;
            case "accessories":
            API.findAccessories()
            .then(found => this.setState({results: found}))
            .catch( err => console.log(err));
            break;
        }
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