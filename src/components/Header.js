import React from 'react'
import logo from '../images/logo.svg'

function Header() {
  return (
    <header class="bg-red-600 flex justify-between p-5">
      <img src={logo} alt="Louwer logo" align="left" class="h-12 text-left mr-auto" />
      <div class="space-y-0 text-white text-center">
        <p class="m-0 p-0">keep montrêal affordable</p>
        <p class="m-0 p-0">gardez montréal abordable</p>
      </div>
      {/* include filters if screen is lg */}
    </header>
  )
}

export default Header