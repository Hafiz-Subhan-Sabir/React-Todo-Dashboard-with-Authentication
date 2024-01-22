import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props){
    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    <Link className="navbar-brand" to="/navbar" style={{color:"aqua"}}>{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/textform">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.abouttext}</Link>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}> {/* 1st Switch */}
      <input className="form-check-input" onClick={props.red}type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Red Colour</label></div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}> {/* 2ns Switch */}
      <input className="form-check-input" onClick={props.grey}type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Grey Colour</label></div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>  {/* 3rd Switch */}
      <input className="form-check-input" onClick={props.aqua}type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Aqua Colour</label></div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>  {/* 4th Switch */}
      <input className="form-check-input" onClick={props.black}type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Black Colour</label></div>
      </div>
    </div>
</nav>
    )
}
Navbar.propTypes = {title: PropTypes.string.isRequired,
                    abouttext: PropTypes.string.isRequired
}
Navbar.defaultProps ={
    title : "Set title Here",
    abouttext : "About Text Here"
};