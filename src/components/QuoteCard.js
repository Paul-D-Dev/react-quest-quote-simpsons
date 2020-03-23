import React from 'react';
import PropTypes from 'prop-types';
import './style/QuoteCard.css';

QuoteCard.prototype = {
    character: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired
}


function QuoteCard(props) {
    return (
        <figure class="QuoteCard">
            <img
            src={props.image}
            alt={props.character} />
            <figcaption>
            <blockquote>
                {props.quote}
            </blockquote>
            <cite>{props.character}</cite>
            </figcaption>
        </figure>
    )
}



export default QuoteCard;