import React, { Component } from 'react'
import { getData } from '../../utils/fetch_data'
import { username, token } from '../../token'
import './index.css'

class UserHeader extends Component {
  state = { userData: null }

  componentDidMount() {
    getData(
      `https://api.github.com/users/${username}?access_token=${token}`
    ).then(userData => {
      console.log('userheader', userData)
      this.setState({ userData })
    })
  }
  render() {
    const { userData } = this.state
    return (
      <>
        {!userData ? (
          <p>Loading...</p>
        ) : (
          <div className="UserHeader">
            <img className="image" src={userData.avatar_url} alt="profile" />
            <h2>{userData.login}</h2>
          </div>
        )}
      </>
    )
  }
}

export default UserHeader
