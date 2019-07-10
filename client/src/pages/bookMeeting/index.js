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
        API.getBookMeeting()
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

        item ? (
            <div className="row meeting-item">
                <div className="meeting-item-time grow"><time>{item.start_time}</time></div>
                <div>
                <form method="POST" action="/api/meetings/book">
                    <input type="hidden" name="meeting_id" value={item._id}/>
                    <input type="submit" value="Book"/>
                </form>
                </div>
            </div>
            ) : (
            <p>No meetings available.</p>
            )
        );
        console.log(data.meeting)
        return (
            <div>
            <section>
            <h2>Book meeting slots</h2>

            {items}


            </section>
        </div>
        );
    }
}


export default stylistMeeting;
