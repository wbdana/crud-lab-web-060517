import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.props.store.dispatch)
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: this.state.text
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label><strong>Add a restaurant</strong></label><br/>
        <input type='text' onChange={this.handleChange} />
        <input type='submit' />
      </form>
    );
  }
};

export default RestaurantInput;
