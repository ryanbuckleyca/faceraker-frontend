import React from 'react'

const Title = ({ linkTo, children }) => (
  <h1 style={{ margin: ' 0 0 .3em', padding: 0 }}>
    <a href={ linkTo }>
      { children }
    </a>
  </h1>
)

export default Title