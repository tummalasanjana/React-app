import React from 'react';
import './Users.css';

import User from './User';

class Users extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users')
      .then(res => res.json())
      .then(users => this.setState({ users }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h4>Users</h4>
        {
          this.state.users
            .filter(user => user.login.includes(this.props.searchText))
            .map(user => <User key={user.id} user={user} setUser={this.props.setUser} />)
        }
      </div>
    )
  }

}

export default Users;
