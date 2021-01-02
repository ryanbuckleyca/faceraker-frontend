import React from 'react'

const Button = ({ children, onClick, id }) => {
  return (
    <button id={ id } class="bg-white text-red-600 rounded-sm p-2" onClick={ onClick }>
      { children }
    </button>
  )
}

export default Button