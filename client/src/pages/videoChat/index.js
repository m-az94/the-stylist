import React, { Component } from "react";
import API from "../../utils/API";
// import './style.css';
// import Meeting from "../../components/createMeeting";
// import 'flatpickr/dist/themes/material_green.css'
 
// import Flatpickr from 'react-flatpickr'
// import StylistData from '../../stylist.json';

class stylistMeeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: []
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
            .then((res) =>{
                //   this.setState({
                //     image: res.data.message
                //   })

                this.props.history.push('/dashboard/doctor')
            }
            )
        .catch(err => console.log(err));
      }

      _handleUpdate(e) {
        if (e.target.validity.valid) {
          this.setState({ number: e.target.value }); 
        }
      }

    // When the component mounts, load the next dog to be displayed
    componentDidMount() {
        this.getMeeting();
    }



    getMeeting = () => {

        let link = "/api" + this.props.location.pathname;
        API.meetingInfo(link)
            .then(res =>
                //   this.setState({
                //     image: res.data.message
                //   })
                this.setState({
                  data: res.data
                })

                // console.log(res)
            )
            .catch(err => console.log(err));
    };

    render() {
        const { data } = this.state;
        console.log(data)
        console.log(data.embed_code)
        return (
            <div>
                <h2>Meeting</h2>
                <div class="row space-between">
                <div>Start: <time></time></div>
                <div id="message"></div>
                <div>End: <time></time></div>
                </div>

                <div id="ot_embed_demo_container"><div dangerouslySetInnerHTML={{__html: data.embed_code}} /></div>
                <div class="text-center">
                <p><a class="button primary" href="/">Exit</a></p>
                </div>
        </div>
        );
    }
}


export default stylistMeeting;
