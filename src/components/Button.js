import React from 'react'

const Button = ({ children, onClick, id, type }) => {
  const buttons = {
    primary: 
      <button id={ id } className="btn-primary" onClick={ onClick }>
        { children }
      </button>,
    secondary:
      <button id={ id } className="btn-secondary" onClick={ onClick }>
        <span className="mx-auto border-dotted border-b-2 border-teal">
          { children }
        </span>
      </button>
  }
  
  return buttons[type || 'primary']
}

export default Button