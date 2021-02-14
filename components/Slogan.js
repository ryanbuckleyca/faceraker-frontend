import React from 'react'
import Logo from 'images/Logo.js'

function Slogan() {
  return (
    <header className="flex justify-between items-center">
      <Logo align="left" className="h-10 text-left mr-auto" />
      <div className="space-y-0 text-white text-center">
        <a href="https://www.classy.org/give/267006/#!/donation/checkout">
          donnez / donate
        </a>
      </div>
      {/* include filters if screen is lg */}
    </header>
  )
}

export default Slogan
