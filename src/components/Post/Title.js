import React from 'react'

const Title = ({ linkTo, children }) => (
  <h1 class="mt-1 p-0 text-2xl">
    <a href={ linkTo }>
      { children }
    </a>
  </h1>
)

export default Title