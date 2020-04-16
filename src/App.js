import React from 'react';
import CardList from './components/CardList';
import Form from './components/Form';
import Appbar from './components/Appbar';

import { Container } from '@material-ui/core';

const testData = [
  {
    avatar_url: 'https://avatars0.githubusercontent.com/u/11363931?v=4',
    bio: '/* no bio */',
    blog: '',
    company: null,
    html_url: 'https://github.com/artmarydotir',
    id: 11363931,
    name: 'Art Mary',
    public_repos: 37,
    url: 'https://api.github.com/users/artmarydotir',
  },
  {
    login: 'shentao',
    id: 3737591,
    node_id: 'MDQ6VXNlcjM3Mzc1OTE=',
    avatar_url: 'https://avatars0.githubusercontent.com/u/3737591?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/shentao',
    html_url: 'https://github.com/shentao',
    followers_url: 'https://api.github.com/users/shentao/followers',
    following_url:
      'https://api.github.com/users/shentao/following{/other_user}',
    gists_url: 'https://api.github.com/users/shentao/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/shentao/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/shentao/subscriptions',
    organizations_url: 'https://api.github.com/users/shentao/orgs',
    repos_url: 'https://api.github.com/users/shentao/repos',
    events_url: 'https://api.github.com/users/shentao/events{/privacy}',
    received_events_url: 'https://api.github.com/users/shentao/received_events',
    type: 'User',
    site_admin: false,
    name: 'Damian Dulisz',
    company: '@vuejs',
    blog: 'https://dulisz.com',
    location: 'Wrocław',
    email: null,
    hireable: null,
    bio:
      '@vuejs core team. Lead Engineer at Coursedog.\r\nCurator of news.vuejs.org. Coffee lover. Occasional photographer.',
    public_repos: 49,
    public_gists: 3,
    followers: 710,
    following: 4,
    created_at: '2013-03-01T11:46:16Z',
    updated_at: '2020-04-07T11:28:19Z',
  },
  {
    login: 'mhf-ir',
    id: 1172526,
    node_id: 'MDQ6VXNlcjExNzI1MjY=',
    avatar_url: 'https://avatars1.githubusercontent.com/u/1172526?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/mhf-ir',
    html_url: 'https://github.com/mhf-ir',
    followers_url: 'https://api.github.com/users/mhf-ir/followers',
    following_url: 'https://api.github.com/users/mhf-ir/following{/other_user}',
    gists_url: 'https://api.github.com/users/mhf-ir/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/mhf-ir/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/mhf-ir/subscriptions',
    organizations_url: 'https://api.github.com/users/mhf-ir/orgs',
    repos_url: 'https://api.github.com/users/mhf-ir/repos',
    events_url: 'https://api.github.com/users/mhf-ir/events{/privacy}',
    received_events_url: 'https://api.github.com/users/mhf-ir/received_events',
    type: 'User',
    site_admin: false,
    name: 'Muhammad Hussein Fattahizadeh',
    company: '@AASAAM ',
    blog: 'http://mhf.ir/',
    location: 'Iran, Tehran',
    email: null,
    hireable: null,
    bio: null,
    public_repos: 28,
    public_gists: 7,
    followers: 32,
    following: 84,
    created_at: '2011-11-04T14:19:36Z',
    updated_at: '2020-02-01T20:14:58Z',
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: testData,
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
