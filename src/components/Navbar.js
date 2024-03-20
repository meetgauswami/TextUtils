// import React, { useState } from 'react'
// import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


// export default function Navbar(props) {


//   // const changeToOrange = () => {
//   //   document.body.style.backgroundColor = '#ffda96'
//   // }

//   const [modeLabel, setmodeLabel] = useState({
//     userSelect: 'none'
//   })


//   return (
//     <nav className={`navbar navbar-${props.mode} bg-${props.mode} fixed-top`} id=' navbar-color' style={{width:'100%', display:'flex', justifyContent:'space-between'}}>
//   <div className="container-fluid" style={{}}>
    
//          <div className='divForHomeAbout' style={{width:'6pc', display:'flex', justifyContent:'space-between',alignItems:'center'}}>

//     <Link className="navbar-brand" to="/">{props.title}</Link>

//             <Link to="/" style={{ cursor:'pointer', userSelect:'none',textDecoration:'none', color:'#525252', marginRight:'1rem'}}>Home</Link>
//          <Link to="/about" style={{ cursor:'pointer', userSelect: 'none', textDecoration:'none',color:'#525252'}}>About</Link>
//          </div>
//          {/* <div style={{display:'flex', justifyContent:'end'}} > 
//     <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
//        <span className="navbar-toggler-icon"></span> 
//     </button>
//     </div>
//     <div className="offcanvas offcanvas-end text-bg-light" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
//       <div className="offcanvas-header">
//         <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
//         <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//       </div>
//       <div className="offcanvas-body">
//         <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
//           <li className="nav-item">
//             // <a className="nav-link active" aria-current="page" href="#">Home</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Link</a>
//           </li>
//           <li className="nav-item dropdown">
//             <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//               Dropdown
//             </a>
//             <ul className="dropdown-menu dropdown-menu-light">
//               <li><a className="dropdown-item" href="#">Action</a></li>
//               <li><a className="dropdown-item" href="#">Another action</a></li>
//               <li>
//                 <hr className="dropdown-divider"/>
//               </li>
//               <li><a className="dropdown-item" href="#">Something else here</a></li>
//             </ul>
//           </li>
//         </ul>
//         <form className="d-flex mt-3" role="search">
//           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//           <button className="btn btn-success" type="submit">Search</button>
//         </form>
//       </div>
//     </div>*/}

//     <div style={{display:'flex', width:'80%', justifyContent:'end'}} className={`form-check form-switch text-${props.mode=== 'light'?'dark':'light'}`}>
//   <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
//   <label className="form-check-label"htmlFor="flexSwitchCheckDefault" style={modeLabel}>Enable {props.mode=== 'light'?'dark':'light'} Mode</label>
// </div>
//   </div>
// </nav>
//   )
// }


// Navbar.propTypes = {
//         title: PropTypes.string.isRequired,
//         aboutText: PropTypes.string.isRequired
// }


// Navbar.defaultProps = {
//     title: "Set title here",
//     aboutText: "About text here"
// }











//From Code With Harry



import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/">Home</Link>
                            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                        {/* <div className="d-flex">
                            <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
                            <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
                            <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
                            <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
                            <div className="bg-light rounded mx-2" onClick={()=>{props.toggleMode('light')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
                            <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMode('dark')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
                        </div> */}
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode=== 'light'?'Dark':'Light'} Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };