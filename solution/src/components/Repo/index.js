import React from 'react'

const Repo = ({ name, html_url }) => (
  <li>
    <a href={html_url}>{name}</a>
  </li>
)

export default Repo
