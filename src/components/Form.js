import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
  state = {
    userName: '',
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(this.state.userName);
    const response = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    // console.log(response.data);
    this.props.handleNewProfile(response.data);
    this.setState({
      userName: '',
    });
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
