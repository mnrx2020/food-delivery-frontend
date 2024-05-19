import React from 'react'
import "./Header.css"

console.log(React)
const Header = () => {
  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a deletable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisy your cravings and elevate your dinig experience, one delicious meat at a time.</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
