import React from 'react'
import { Link } from 'react-router-dom'

const NotFound404 = () => {
  return (
    <section className="thanks-center flex">
      <div>
        <h1 style={{fontSize: "120px", marginBottom: "10px"}}>404</h1>
        <p>Page Not Found</p>
        <p style={{marginTop: "10px"}}>
          <Link style={{textDecoration: "none"}} to="/">Home Page</Link>
        </p>
      </div>
    </section>
  )
}

export default NotFound404