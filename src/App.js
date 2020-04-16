import React from 'react';
import CardList from './components/CardList';
import Form from './components/Form';
import Appbar from './components/Appbar';

import { Container } from '@material-ui/core';

const testData = [
  {
    name: 'Dan Abramov',
    avatar_url: 'https://avatars0.githubusercontent.com/u/810438?v=4',
    company: '@facebook',
  },
  {
    name: 'Sophie Alpert',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6820?v=4',
    company: 'Humu',
  },
  {
    name: 'Sebastian Markbåge',
    avatar_url: 'https://avatars2.githubusercontent.com/u/63648?v=4',
    company: 'Facebook',
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
    };
  }
  addNewProfile = (profileData) => {
    console.log(profileData);
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };
  render() {
    return (
      <Container maxWidth="xl">
        <Appbar />
        {/* <div className="header">{this.props.title}</div> */}
        <Form handleNewProfile={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </Container>
    );
  }
}
export default App;
