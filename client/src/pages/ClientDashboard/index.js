import React, { Component } from "react";
import API from "../../utils/API";
import Card from "../../components/Card";
import StylistData from '../../stylist.json';
import './style.css';
import "@material/react-dialog/dist/dialog.css";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
} from '@material/react-dialog';
import {Container} from "../../components/Grid";
import { Link } from 'react-router-dom';

class Dashboard extends Component {

  state = {
    data: [],
    image: "",
    match: false,
    matchCount: 0,
    modalOpen: false,
    modalContent: ''
  };

  

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.getOutfit();
  }

  handleBtnClick = event => {

    console.log(event.target.attributes.getNamedItem("data-value").value)
    console.log(event.target.attributes.getNamedItem("data-id").value)

    let data = event.target.attributes.getNamedItem("data-value").value;
    let id = event.target.attributes.getNamedItem("data-id").value;

    API.isHot(id, {isHot : data})
      .then(res =>
        //   this.setState({
        //     image: res.data.message
        //   })
        // this.setState({
        //   data: res.data.data
        // })
        this.getOutfit()
      )
      .catch(err => console.log(err));
    // // Get the data-value of the clicked button
    // const btnType = event.target.attributes.getNamedItem("data-value").value;
    // // Clone this.state to the newState object
    // // We'll modify this object and use it to set our component's state
    // const newState = { ...this.state };

    // if (btnType === "pick") {
    //   // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
    //   newState.match = 1 === Math.floor(Math.random() * 5) + 1;

    //   // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
    //   newState.matchCount = newState.match
    //     ? newState.matchCount + 1
    //     : newState.matchCount;
    // } else {
    //   // If we thumbs down'ed the dog, we haven't matched with it
    //   newState.match = false;
    // }
    // // Replace our component's state with newState, load the next dog image
    // this.setState(newState);

        
  };



  getOutfit = () => {
    const {match: {params}}=this.props;

    console.log(this.props)
    API.getOutfit(params.clientID)
      .then(res =>{
        //   this.setState({
        //     image: res.data.message
        //   })
        console.log(res.data.data);
        this.setState({
          data: res.data.data
        })
      })
      .catch(err => console.log(err));
  };

  render() {
    const {match: {params}}=this.props;
    console.log(this.state.data.length);
    let DisplayEmpty; 
    if(this.state.data.length===0){
      DisplayEmpty=<p class="error"> Welcome to your Dashboard. Currently, you have nothing to view.
      If you haven't already, please fill our profile form 
      <Link to={`/create-profile/${params.clientID}`}><span class="pink"> here</span></Link></p>
    }
    else{
      DisplayEmpty=<p></p>
    }

    const Modal = (
      <Dialog open={this.state.modalOpen} onClose={() => this.setState({ modalOpen: false })}>
        <DialogTitle>My Dialog</DialogTitle>
        <DialogContent>
          PUT SOMETHING HERE
          <h1>Title</h1>
          <p>bla bla bla</p>
        </DialogContent>
        <DialogFooter>
          <DialogButton action='dismiss'>Dismiss</DialogButton>
          <DialogButton action='accept' isDefault>Accept</DialogButton>
        </DialogFooter>
      </Dialog>
    )
    console.log(this.state.modalOpen)

    console.log(Array.isArray(this.state.data))
    Array.isArray(this.state.contacts)
    console.log(this.state.data);
    return (
      <Container>
      <div id="background" className="text-center">
        {DisplayEmpty}
        {Modal}
          {this.state.data && this.state.data.map((obj,index) => 

          obj.hotOrNot || obj.hotOrNot === undefined ? 
            <div className="text-center">
            <h3>Outfit by {obj.stylistName}<span>                </span>
            
            {obj.hotOrNot ?
             <a class="btn secondary" href={`/meetings/join/${this.props.match.params.clientID}${obj.stylistID}`}>Join meeting</a>
             :
             ""
            }
            </h3>

            { obj.styleResult.map(obj2 => 
              <Card
                image={obj2.item} name = {obj2.type}
              />
            )}


            {obj.hotOrNot ?
              ""
            :
             <div className="mt-2">
             <button type="button" onClick={this.handleBtnClick} data-value="1" data-id={obj._id} className="btn btn-secondary">Hot</button>
             <button type="button" onClick={this.handleBtnClick} data-value="0" data-id={obj._id} className="btn btn-secondary">Not</button>
             </div>
            }
            </div>
          :
          ""

          )}
      </div>
      </Container>
    );
  }
}

export default Dashboard;
