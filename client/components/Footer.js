import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <Link className="links" to="/">
          home
        </Link>
      </div>
      <hr />
      <div>
        <p> © Habit Warden some rights reserved [2019] </p>
      </div>
    </div>
  )
}
