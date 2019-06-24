class ClientForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Thank you for the submission!' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    Age:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    Height - cm:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    Hair colour:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    Eye colour:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    Body type:
          <select value={this.state.value} onChange={this.handleChange}>
                        <option value="select">Make a selection</option>
                        <option value="rectangle">Rectangle</option>
                        <option value="triangle">Triangle</option>
                        <option value="spoon">Spoon</option>
                        <option value="hourglass">Hourglass</option>
                        <option value="top-hourglass">Top hourglass</option>
                    </select>
                </label>
                <label>
                    Chest - cm:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    Waist - cm:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    Shoulders - cm:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    Shoe size - US/Canada:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    Jean/Pant size:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    Shirt size:
          <select value={this.state.value} onChange={this.handleChange}>
                        <option value="select">Make a selection</option>
                        <option value="extra-small">XS</option>
                        <option value="small">S</option>
                        <option value="medium">M</option>
                        <option value="large">L</option>
                        <option value="extra-large">XL</option>
                    </select>
                </label>
                <label>
                    Jacket/Blazer size:
          <select value={this.state.value} onChange={this.handleChange}>
                        <option value="select">Make a selection</option>
                        <option value="extra-small">XS</option>
                        <option value="small">S</option>
                        <option value="medium">M</option>
                        <option value="large">L</option>
                        <option value="extra-large">XL</option>
                    </select>
                </label>
                <label>
                    Which term best describes your style?
                <select value={this.state.value} onChange={this.handleChange}>
                        <option value="select">Make a selection</option>
                        <option value="classic">Classic</option>
                        <option value="chic">Chic</option>
                        <option value="casual">Casual</option>
                        <option value="masculine">Masculine</option>
                        <option value="sexy">Sexy</option>
                    </select>
                </label>
                <label>
                    What colours do you typically wear?
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    Who are your style icons? Why?
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    What do you consider your best feature(s)?
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(
    <ClientForm />,
    document.getElementById('root')
);