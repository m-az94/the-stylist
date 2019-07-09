import React, { Component } from "react";
import API from "../../utils/API";
// import Meeting from "../../components/createMeeting";
import 'flatpickr/dist/themes/material_green.css'
 
import Flatpickr from 'react-flatpickr'
// import StylistData from '../../stylist.json';

class createMeeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start_date: new Date(),
            duration: 15
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this._handleUpdate = this._handleUpdate.bind(this);

      }


    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        const { date } = this.state;
        console.log(this.state)

        API.createMeeting(this.state)
            .then(res => 
                //   this.setState({
                //     image: res.data.message
                //   })
                this.props.history.push('/dashboard/doctor')
            )
        .catch(err => console.log(err));
      }

      _handleUpdate(e) {
        if (e.target.validity.valid) {
          this.setState({ number: e.target.value }); 
        }
      }

    // When the component mounts, load the next dog to be displayed
    // componentDidMount() {
    //     this.loadNextDog();
    // }



    // loadNextDog = () => {
    //     API.getClientInfo()
    //         .then(res =>
    //             //   this.setState({
    //             //     image: res.data.message
    //             //   })
    //             console.log(res)
    //         )
    //         .catch(err => console.log(err));
    // };

    render() {
        const { start_date,duration } = this.state;
        console.log(duration)
        return (
            <div>
            <section>
                <h2>Create meeting slot</h2>
    
                <p>Meeting slots that you create here can be booked by patients.</p>
                <form onSubmit={this.handleSubmit}>
    
                    <div>
                        <label for="field-start_date">Start date and time</label>
                        <Flatpickr data-enable-time
                            value={start_date}
                            onChange={start_date => { this.setState({start_date}) }} />
                    </div>
    
                    <div>
                        <label for="field-duration">Duration (minutes)</label>
                        <input type="number" value={this.state.duration} onChange={this._handleUpdate} step="any" />                    
                    </div>
                    <div class="buttons">
                        <input type="submit" value="Create"/>
                    </div>
    
                </form>
            </section>
        </div>
        );
    }
}


export default createMeeting;
