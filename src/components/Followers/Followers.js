import React from 'react';
import './Followers.css';

import User from '../Users/User';

class Followers extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      followers: [],
    };
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.user.login}/followers`)
      .then(res => res.json())
      .then(followers => this.setState({ followers }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <User user={this.props.user} />
        <div className="App-navbar">
          <div onClick={() => this.props.setUser(null)} className="App-nav pointer">Home</div>
          <div onClick={this.props.toggleFollowers} className="App-nav pointer">Repos</div>
          <div className="App-nav App-active">Followers</div>
        </div>
        {this.state.followers.map(follower => <User key={follower.id} user={follower} />)}
      </div>
    )
  }

}


export default Followers;