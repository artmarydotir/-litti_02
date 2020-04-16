import React, { Component } from 'react';

export default class Form extends Component {
  userInput = React.createRef();

  handleSubmit = (event) => {
    // console.log(this.userInput.current.value);
    event.preventDefault();
  };
  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <input
          ref={this.userInput}
          type="text"
          placeholder="github username"
          required
        />
        <button type="submit">Add New Card</button>
      </form>
    );
  }
}
