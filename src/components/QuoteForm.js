import React from 'react';
import './style/QuoteForm.css'

export default class QuoteForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {character : 'Homer Simpson'};
    }

    render() {
      return (
        <form
          className="QuoteForm"
        >
          <label htmlFor="character">Character:</label>
          <input
            id="character"
            name="character"
            type="text"
            value={this.state.character}
            onChange={(event) => {
                this.setState({character: event.target.value})
                }
            }
          />
        </form>
      );
    }
  }
  