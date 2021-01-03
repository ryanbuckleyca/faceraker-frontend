import React from 'react'

const Title = ({ linkTo, children }) => (
  <h1 className="mb-5 p-0 text-2xl mr-24">
    <a href={ linkTo }>
      { children }
    </a>
  </h1>
)

export default Title