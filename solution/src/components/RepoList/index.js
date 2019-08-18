import React, { Component } from 'react'
import Repo from '../Repo'
import { getData } from '../../utils/fetch_data'
import { username, token } from '../../token'

class RepoList extends Component {
  state = { repos: null }

  componentDidMount() {
    getData(
      `https://api.github.com/users/${username}/repos?access_token=${token}`
    ).then(repos => {
      console.log('repos', repos)
      this.setState({ repos })
    })
  }

  render() {
    const { repos } = this.state
    return (
      <>
        {!repos ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h3>Repo List</h3>
            <ul>
              {repos.map(repo => (
                <Repo key={repo.id} {...repo} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default RepoList
