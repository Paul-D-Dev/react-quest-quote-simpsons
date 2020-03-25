import React from "react";
import QuoteCard from './QuoteCard';
import axios from 'axios';

class QuoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote : null
    }

    this.getQuote = this.getQuote.bind(this);
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote() {
      axios.get(`https://simpsons-quotes-api.herokuapp.com/quotes`)
      .then(response => response.data)
      .then(data => {
        this.setState({
          quote: data[0]
        })
      })
  }

  render() {
    const initQuote = this.state.quote ? <QuoteCard quote={this.state.quote}/> : <p>Loading</p>
    return (
      <div>
        {initQuote}
        <button type="submit" onClick={this.getQuote}>Get quote</button>
      </div>
    )
  }
};

export default QuoteList;