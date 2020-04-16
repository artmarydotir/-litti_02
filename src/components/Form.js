import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default class Form extends Component {
  state = {
    userName: '',
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(this.state.userName);
    if (this.state.userName) {
      const response = await axios.get(
        `https://api.github.com/users/${this.state.userName}`
      );
      // console.log(response.data);
      this.props.handleNewProfile(response.data);
      this.setState({
        userName: '',
      });
    } else {
      alert('empty string? really?');
    }
  };
  render() {
    return (
      <form
        action=""
        onSubmit={this.handleSubmit}
        noValidate
        autoComplete="off"
      >
        <TextField
          variant="outlined"
          label="Github Username"
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
        />
        {/* <input
          type="text"
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          placeholder="github username"
          required
        /> */}

        <Button type="submit" color="primary" variant="outlined">
          Add New Card
        </Button>
      </form>
    );
  }
}
