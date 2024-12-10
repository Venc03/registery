import { React, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

function Layout() {
    const { logout_fv } = useContext(AuthContext)
  return (
    <div className="container">
      <header className="App-header">
        <h1>
          React login & registery
        </h1>
      </header>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">StartPage</Link> 
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reg">Registery</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/log">Login</Link>
          </li>
          <li>
            <button onClick = {logout_fv} className="btn btn-danger">Logout</button>
          </li>
        </ul>
      </nav>
      <article>
        <Outlet />
      </article>
      <footer>

      </footer>
    </div>
  )
}

export default Layout