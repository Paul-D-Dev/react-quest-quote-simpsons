import React from "react";
import QuoteCard from './QuoteCard';
import axios from 'axios';

// An array of objects
const initialQuote = {
    quote:
      "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    character: "Homer Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
  }

class QuoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote : initialQuote
    }

    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    this.setState({loading : true}, () => {
      axios.get(`https://simpsons-quotes-api.herokuapp.com/quotes`)
      .then(response => response.data)
      .then(data => {
        this.setState({
          loading: false,
          quote: data[0]
        })
      })
    })
  }

  render() {
    const {loading} = this.state;
    return (
      <div>
        {loading ? 
        <p>Loading</p>
          :
        <QuoteCard quote={this.state.quote}/>
        }
        <button type="submit" onClick={this.getQuote}>Get quote</button>
      </div>
    )
  }
};

export default QuoteList;