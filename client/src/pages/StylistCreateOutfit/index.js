import React, { Component } from 'react';
import API from "../../utils/API";
import { Container, Row } from "../../components/Grid";
import SearchItems from "../../components/SearchItems";
import DisplayItems from "../../components/DisplayItems"
import "./style.css";

class StylistCreateOutfit extends Component {
    state = {
        search: "",
        results: [],
        top: "",
        bottom: "",
        dress: "",
        shoes: "",
        accessories: ""
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
            .then(found => {
                console.log(found.data[0].image);
                this.setState({results: found.data[0].image})
            })
            .catch( err => console.log(err));
            break;
            case "bottoms":
            API.findBottoms()
            .then(found => this.setState({results: found.data[0].image}))
            .catch( err => console.log(err));
            break;
            case "dresses":
            API.findDresses()
            .then(found => this.setState({results: found.data[0].image}))
            .catch( err => console.log(err));
            break;
            case "shoes":
            API.findShoes()
            .then(found => this.setState({results: found.data[0].image}))
            .catch( err => console.log(err));
            break;
            case "accessories":
            API.findAccessories()
            .then(found => this.setState({results: found.data[0].image}))
            .catch( err => console.log(err));
            break;
        }
    }

    handleImageClick = event =>{
        event.persist();
        let target = event.target.src;
        let operator = this.state.search;
        switch(operator){
            case "tops":
            this.setState({top: target});
            console.log(this.state)
            break;
            case "bottoms":
            this.setState({bottom: target});
            console.log(this.state)
            break;
            case "dresses":
            this.setState({dress: target});
            console.log(this.state);
            break;
            case "shoes":
            this.setState({shoes: target});
            console.log(this.state)
            break;
            case "accessories":
            this.setState({accessories: target});
            console.log(this.state)
            break;
        }
    }

    render(){

        let display;
        if (this.state.results.length===0){
          display = <h3>No clothes to view</h3>;
        }
        else{
          display = <DisplayItems images={this.state.results} handleImageClick={this.handleImageClick} />
        }

        return (
            <div id="createOutfitMain">
                <Container>
                    <Row>
                        <h1>Create an Outfit</h1>
                    </Row>
                    <Row>
                        <SearchItems handleInputChange={this.handleInputChange} handleSearchItems={this.handleSearchItems} />
                        {display}
                    </Row>
                </Container>
            </div>
        )
    }


}

export default StylistCreateOutfit;