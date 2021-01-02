import React from 'react'
import logo from '../images/logo.svg'

function Slogan() {
  return (
    <header class="w-full flex justify-between items-center">
      <img src={logo} alt="Louwer logo" align="left" class="h-12 text-left mr-auto" />
      <div class="space-y-0 text-white text-center">
        <p class="m-0 p-0">keep montrêal affordable</p>
        <p class="m-0 p-0">gardez montréal abordable</p>
      </div>
      {/* include filters if screen is lg */}
    </header>
  )
}

export default Slogan