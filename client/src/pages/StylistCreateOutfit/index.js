import React, { Component } from 'react';
import API from "../../utils/API";
import { Container, Row } from "../../components/Grid";
import SearchItems from "../../components/SearchItems";
import DisplayItems from "../../components/DisplayItems"
import "./style.css";
import DisplayState from '../../components/DisplayState';

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
        this.setState({search: event.target.value});
    }

    handleSearchItems = event =>{
        event.persist();
        let searchTerm = this.state.search;
        switch (searchTerm){
            case "tops":
            console.log(API.findTops);
            this.setState({results: API.findTops[0].image});
            break;
            case "bottoms":
            console.log(API.findBottoms);
            this.setState({results: API.findBottoms[0].image});
            break;
            case "dresses":
            console.log(API.findDresses);
            this.setState({results: API.findDresses[0].image});
            break;
            case "shoes":
            console.log(API.findShoes);
            this.setState({results: API.findShoes[0].image});
            break;
            case "accessories":
            console.log(API.findAccessories);
            this.setState({results: API.findAccessories[0].image});
            break;
        }
    }

    handleImageClick = event =>{
        event.persist();
        //console.log(event);
        //console.log(this.state.search)
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
            console.log(this.state);
            break;
        }
    }

    handleRemoveState = event =>{
        event.persist();
        let target = event.target.id;
        switch (target){
            case "top": 
            this.setState({top: ""});
            break;
            case "bottom":
            this.setState({bottom: ""});
            break;
            case "dress": 
            this.setState({dress: ""});
            break;
            case "shoes":
            this.setState({shoes: ""});
            break;
            case "accessories":
            this.setState({accessories: ""});
            break;
        }
    }

    handleSend2Client = event =>{
        event.persist();
        let outfit=[];
        if (this.state.top!==""){
            outfit.push({
                item: this.state.top,
                type: "top"
            })
        }
        if (this.state.bottom!==""){
            outfit.push({
                item: this.state.bottom,
                type: "bottom"
            })
        }
        if (this.state.dress!==""){
            outfit.push({
                item: this.state.dress,
                type: "dress"
            })
        }
        if (this.state.shoes!==""){
            outfit.push({
                item: this.state.shoes,
                type: "shoes"
            })
        }
        if (this.state.accessories!==""){
            outfit.push({
                item: this.state.accessories,
                type: "accessories"
            })
        }
        console.log(outfit);
        API.createOutfit({
            clientID: Math.floor(Math.random()*11),
            stylistID: Math.floor(Math.random()*11),
            styleResult: outfit
        });

    }

    render(){

        let displayItems;
        if (this.state.results.length===0){
          displayItems = <h3>No clothes to view</h3>;
        }
        else{
          displayItems = <DisplayItems images={this.state.results} handleImageClick={this.handleImageClick} />
        }

        let displayState;
        if(this.state.top==="" && this.state.bottom==="" && this.state.dress==="" && this.state.shoes==="" && this.state.accessories===""){
            displayState = <h3> Your Outfit Will Be Displayed Here</h3>
        }
        else{
            displayState = 
            <DisplayState 
            top={this.state.top}  
            bottom={this.state.bottom} 
            dress={this.state.dress}
            shoes={this.state.shoes} 
            accessories={this.state.accessories} 
            handleRemoveState={this.handleRemoveState} 
            handleSend2Client={this.handleSend2Client} />
        }

        return (
            <div id="createOutfitMain">
                <Container>
                    <Row>
                    <h3>Create an Outfit</h3>
                    </Row>
                    <Row>
                        <SearchItems handleInputChange={this.handleInputChange} handleSearchItems={this.handleSearchItems} />
                    </Row>
                    <Row>
                        {displayState}
                    </Row>
                    <Row>
                        {displayItems}
                    </Row>
                </Container>
            </div>
        )
    }


}

export default StylistCreateOutfit;