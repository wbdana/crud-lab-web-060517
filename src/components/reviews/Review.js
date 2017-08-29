import React, { Component } from 'react';

class Review extends Component {

  handleClick = (event) => {
    this.props.store.dispatch({ type: 'DELETE_REVIEW', review: this.props.review, id: this.props.review.id })
  }

  render() {
    return (
      <li>
        {this.props.review.text}
        <button onClick={this.handleClick}>Delete review</button>
      </li>
    );
  }
};

export default Review;
