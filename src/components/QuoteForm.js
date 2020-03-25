import React from 'react';
import './style/QuoteForm.css'

export default class QuoteForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {character : 'Homer Simpson'};

        // this est bien associé à l'instance dans la méthode handleChange
        // sans ça this = undefined
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({character: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefaults();
    }


    render() {
      return (
        <form onSubmit={this.handleSubmit}
          className="QuoteForm"
        >
          <label htmlFor="character">Character:</label>
          <input
            id="character"
            name="character"
            type="text"
            value={this.state.character}
            onChange={this.handleChange}
          />
        </form>
      );
    }
  }
  