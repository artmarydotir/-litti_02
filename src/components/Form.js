import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form action="">
        <input type="text" placeholder="github username" />
        <button>Add New Card</button>
      </form>
    );
  }
}
