import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {

  handleClick = (event) => {
    this.props.store.dispatch({ type: 'DELETE_RESTAURANT', restaurant: this.props.restaurant, id: this.props.restaurant.id })
  }

  render() {
    console.log(this.props.store)
    return (
      <li>
        <strong>{this.props.restaurant.text}</strong><br/>
        <button onClick={this.handleClick}>Delete this restaurant</button><br/>
        <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id} />
      </li>
    );
  }
};

export default Restaurant;
