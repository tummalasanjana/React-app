import React from 'react';
import './App.css';

import Search from './components/Search';
import Users from './components/Users';
import Repos from './components/Repos';
import Followers from './components/Followers';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      user: null,
      showFollowers: false
    };
  }

  setSearchText = searchText => this.setState({ searchText });

  setUser = user => this.setState({ user });

  toggleFollowers = () => this.setState({ showFollowers: !this.state.showFollowers });

  render() {
    const { searchText, user, showFollowers } = this.state;
    return (
      <div className="App">
        <h1>GitHub API</h1>
        {
          user
            ? showFollowers
              ? <Followers user={user} setUser={this.setUser} toggleFollowers={this.toggleFollowers} />
              : <Repos user={user} setUser={this.setUser} toggleFollowers={this.toggleFollowers} />
            : <>
              <Search onSearch={this.setSearchText} />
              <Users searchText={searchText} setUser={this.setUser} />
            </>
        }
      </div>
    )
  }

}

export default App;
