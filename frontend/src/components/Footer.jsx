import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>KING'S</h1>
          <p>Events and weddings</p>
        </div>
        <div className="tag">
          <label style={{display: 'block', margin:'0 auto'}}>
            <p>Thank you for being with us! Stay tuned for exciting news and updates.</p>
          </label>
          <div>
            {/* <input type='text' placeholder='email'></input> */}
            {/* <button>Subscribe</button> */}
          </div>
          <p>Don't miss out on exciting news and updates! Stay tuned!!</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
