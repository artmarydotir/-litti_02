import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    userName: '',
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.userName);
  };
  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          placeholder="github username"
          required
        />
        <button type="submit">Add New Card</button>
      </form>
    );
  }
}
