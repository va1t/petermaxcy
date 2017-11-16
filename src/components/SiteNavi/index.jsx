import React from 'react'
import Link from 'gatsby-link'

class SiteNavi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary">
        <div className="container">
          <Link className="text-center" to="/">
            <h1 className="navbar-brand mb-0">{title}</h1>
          </Link>
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row">
              <li
                className={
                  location.pathname === '/' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/blog/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/blog/" className="nav-link">
                  Blog
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/profile/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/bio/" className="nav-link">
                  Bio
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
        </div>
        <div className="contact">
          <a href="tel:908-878-9486">
            <img src="/img/phone.png" />
          </a>
          <a
            href="mailto:peter.maxcy@gmail.com?Subject=Ref:%20Personal%20Site"
            target="_top"
          >
            <img src="/img/email.png" />
          </a>
          <a href="http://github.com/va1t" target="_blank">
            <img src="/img/github.png" />
          </a>
          <a href="http://www.linkedin.com/in/petermaxcy" target="_blank">
            <img src="/img/linkedin.png" />
          </a>
        </div>
      </nav>
    )
  }
}

export default SiteNavi
