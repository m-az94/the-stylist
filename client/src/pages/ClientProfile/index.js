import React, { Component } from 'react';
import './style.css';
import API from '../../utils/API';

const inputParsers = {
    uppercase(input) {
        return input.toUpperCase();
    },
    number(input) {
        return parseFloat(input);
    },
    date(input) {
        const split = input.split('/');
        const day = split[1]
        const month = split[0];
        const year = split[2];
        return `${year}-${month}-${day}`;
    },
};

class ShakingError extends React.Component {
    constructor() { super(); this.state = { key: 0 }; }

    componentWillReceiveProps() {
        this.setState({ key: ++this.state.key });
    }

    render() {
        return <div key={this.state.key} className="bounce">{this.props.text}</div>;
    }
}

class ClientForm extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {

        event.preventDefault();

        const {match: {params}}=this.props;

        if (!event.target.checkValidity()) {
            this.setState({
                invalid: true,
                displayErrors: true,
            });
            return;
        }
        const form = event.target;
        const data = new FormData(form);

        for (let name of data.keys()) {
            const input = form.elements[name];
            const parserName = input.dataset.parse;
            if (parserName) {
                const parsedValue = inputParsers[parserName](data.get(name))
                data.set(name, parsedValue);
            }
        }

        this.setState({
            res: stringifyFormData(data),
            invalid: false,
            displayErrors: false,
        });

        // console.log(this.state)
        console.log(params.clientID)

        let dataJson = JSON.parse(stringifyFormData(data))
        console.log(dataJson)
        dataJson.clientID = params.clientID

        API.postClientInfo(dataJson)
            .then(res => this.props.history.push(`/client-dashboard/${params.clientID}`))
            .catch(err => console.log(err));

            // API.getCurrentClientInfo("/api/userinfo/" + params.clientID)
            // .then(res => console.log(res))
            // .catch(err => console.log(err));
    }

    render() {
        const { res, invalid, displayErrors } = this.state;
        return (
            <div id="page" >
                <form
                    onSubmit={this.handleSubmit}
                    noValidate
                    className={displayErrors ? 'displayErrors' : ''}
                >
                <h3 className="text-center">Tell us more about <span>you</span></h3>
                    <label htmlFor="name">My name is:</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        data-parse="uppercase"
                        required
                    />

                    <label htmlFor="birthdate">My birthdate is:</label>
                    <input
                        id="birthdate"
                        name="birthdate"
                        type="text"
                        data-parse="date"
                        placeholder="MM/DD/YYYY"
                        pattern="\d{2}\/\d{2}/\d{4}"
                        required
                    />

                    <label htmlFor="hairColour">My hair colour is:</label>
                    <input
                        id="hairColour"
                        name="hairColour"
                        type="text"
                        data-parse="uppercase"
                        required
                    />

                    <label htmlFor="eyeColour">My eye colour is:</label>
                    <input
                        id="eyeColour"
                        name="eyeColour"
                        type="text"
                        data-parse="uppercase"
                        required
                    />

                    <label htmlFor="bodyType">My body type is:</label>
                    <input
                        id="bodyType"
                        name="bodyType"
                        type="text"
                        data-parse="uppercase"
                        required
                    />

                    <label htmlFor="chest">My chest measurement in cm:</label>
                    <input
                        id="chest"
                        name="chest"
                        type="text"
                        data-parse="number"
                        required
                    />

                    <label htmlFor="waist">My waist measurement in cm:</label>
                    <input
                        id="waist"
                        name="waist"
                        type="text"
                        data-parse="number"
                        required
                    />

                    <label htmlFor="shoulders">My shoulders measurement in cm:</label>
                    <input
                        id="shoulders"
                        name="shoulders"
                        type="text"
                        data-parse="number"
                        required
                    />

                    <label htmlFor="shoeSize">My shoe size in US/CAN:</label>
                    <input
                        id="shoeSize"
                        name="shoeSize"
                        type="text"
                        data-parse="number"
                        placeholder="7"
                        required
                    />

                    <label htmlFor="jeanSize">My jean/pant size is:</label>
                    <input
                        id="jeanSize"
                        name="jeanSize"
                        type="text"
                        data-parse="number"
                        placeholder="27"
                        required
                    />

                    <label htmlFor="shirtSize">My shirt size is:</label>
                    <input
                        id="shirtSize"
                        name="shirtSize"
                        type="text"
                        data-parse="uppercase"
                        placeholder="Medium"
                        required
                    />

                    <label htmlFor="jacketSize">My jacket/blazer size is:</label>
                    <input
                        id="jacketSize"
                        name="jacketSize"
                        type="text"
                        data-parse="uppercase"
                        placeholder="Large"
                        required
                    />

                    <label htmlFor="q1">Which term best describes your style? Classic, chic, casual, masculine, sexy</label>
                    <input
                        id="q1"
                        name="q1"
                        type="text"
                        data-parse="uppercase"
                        required
                    />

                    <label htmlFor="q2">What colours do you typically wear?</label>
                    <input
                        id="q2"
                        name="q2"
                        type="text"
                        data-parse="uppercase"
                        required
                    />

                    <label htmlFor="q3">Who are your style icons? Why?</label>
                    <input
                        id="q3"
                        name="q3"
                        type="text"
                        data-parse="uppercase"
                        required
                    />

                    <label htmlFor="q4">What do you consider your best feature(s)?</label>
                    <input
                        id="q4"
                        name="q4"
                        type="text"
                        data-parse="uppercase"
                        required
                    />

                    <button>Send data to Stylist!</button>
                </form>


                <div className="res-block">
                    {invalid && (
                        <ShakingError text="Form is not valid" />
                    )}
                    {!invalid && res && (
                        <div>
                            <h3>Data to be sent to Stylist:</h3>
                            <pre>FormData {res}</pre>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

// ReactDOM.render(
//     <ClientForm />,
//     document.getElementById('root')
// );


function stringifyFormData(fd) {
    const data = {};
    for (let key of fd.keys()) {
        data[key] = fd.get(key);
    }
    return JSON.stringify(data, null, 2);
}

export default ClientForm;