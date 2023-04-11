import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className='fixed-top'>
        <nav className="navbar navbar-dark bg-dark justify-content-center" style={{ opacity: 0.8 }}>
          <span className="navbar-text text-white fs-1">
            Try Glasses App Online          
          </span>
        </nav>
      </div>
    )
  }
}
