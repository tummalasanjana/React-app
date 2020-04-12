import React from 'react';
import './Repos.css';

import User from '../Users/User';

class Repos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      repos: [],
    };
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.user.login}/repos`)
      .then(res => res.json())
      .then(repos => this.setState({ repos }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <User user={this.props.user} />
        <div className="App-navbar">
          <div onClick={() => this.props.setUser(null)} className="App-nav pointer">Home</div>
          <div className="App-nav App-active">Repos</div>
          <div onClick={this.props.toggleFollowers} className="App-nav pointer">Followers</div>
        </div>
        {this.state.repos.map(repo =>
          <div className="Repos-row">
            <div key={repo.id} className="Repos-container">
              <div className="Repos-name">{repo.name}</div>
              <div className="Repos-description">{repo.description}</div>
            </div>
          </div>
        )}
      </div>
    )
  }

}


export default Repos;