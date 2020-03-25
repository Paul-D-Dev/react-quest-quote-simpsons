import React from 'react';
import './style/QuoteForm.css'

const MAX_LENGTH = 30;
export default class QuoteForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {character : ''};

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
        const maximumReached = this.state.character.length >= MAX_LENGTH;
        const nbRemaining = MAX_LENGTH - this.state.character.length;

      return (
        <form onSubmit={this.handleSubmit}
          className="QuoteForm"
        >
          <label htmlFor="character">Character:</label>
          <input
            className= {maximumReached ? 'length-maximum-reached' : 'length-ok'}
            id="character"
            name="character"
            type="text"
            value={this.state.character}
            onChange={this.handleChange}  
          />
          <small className="remaining-characters">
              {nbRemaining} remaining characters
          </small>
        
        </form>
      );
    }
  }
  