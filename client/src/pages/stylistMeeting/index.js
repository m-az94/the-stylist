import React, { Component } from "react";
import API from "../../utils/API";
import './style.css';
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
        API.getMeetingStylist()
            .then(res =>
                //   this.setState({
                //     image: res.data.message
                //   })
                this.setState({
                  data: res.data.meeting
                })
            )
            .catch(err => console.log(err));
    };

    render() {
        const { data } = this.state;
        console.log(data)
        const items = data.map((item,key) => 
        // console.log(item._id)
              <div className="row meeting-item">
                <div className="meeting-item-time grow"><time>{item.start_time}</time></div>
                <div className="pull-right"><a class="button" href={'/meetings/join/' + item._id}>Join meeting</a></div>
              </div>
        );
        console.log(data.meeting)
        return (
            <div>
            <section>
              <h2>Patient Dashboard</h2>
              <a class="button pull-right" href="/meetings/book">+ Book meeting</a>
             

              <h3>Current meeting</h3>
              <div class="column meeting-strip">
              {items}

              </div>
            </section>
        </div>
        );
    }
}


export default stylistMeeting;
