import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Image } from 'react-bootstrap'
import '../css/navbar.css';
import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react';

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [colorChange, setColorchange] = useState(false);

  const showDropdown = (e)=>{
    setShow(!show);
}
const hideDropdown = e => {
    setShow(false);
}
const showDropdown1 = (e)=>{
    setShow1(!show1);
}
const hideDropdown1 = e => {
    setShow1(false);
}

const showDropdown2 = (e)=>{
  setShow2(!show2);
}
const hideDropdown2 = e => {
  setShow2(false);
}
const showDropdown3 = (e)=>{
  setShow3(!show3);
}
const hideDropdown3 = e => {
  setShow3(false);
}
const showDropdown4 = (e)=>{
  setShow4(!show4);
}
const hideDropdown4 = e => {
  setShow4(false);
}

const showDropdown5 = (e)=>{
  setShow5(!show5);
}
const hideDropdown5 = e => {
  setShow5(false);
}

const showDropdown6 = (e)=>{
  setShow6(!show6);
}
const hideDropdown6 = e => {
  setShow6(false);
}


const changeNavbarColor = () =>{
  if(window.scrollY >= 80){
    setColorchange(true);
  }
  else{
    setColorchange(false);
  }
};
window.addEventListener('scroll', changeNavbarColor);
 



  return (

    <div className='container1' className="scroll-to-bottom" >
      <div >
    
    <Navbar collapseOnSelect expand="lg"  variant="light" className={colorChange ? 'navbar colorChange' : 'navbar'} >
     <Navbar.Brand href="/">
    
    <img
     src="/images/favicon.png"
     height="110em"
     width="110em"
     className="d-inline-block align-top "
 
   /></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">

     
      <NavDropdown title="Aboutus" 
      id="collasible-nav-dropdown" 
      id="dropdown-toggle"
      show={show1}
      onMouseEnter={showDropdown1} 
     onMouseLeave={hideDropdown1}>
         
        <NavDropdown.Item href="/tmg" id="dropdown">TMG </NavDropdown.Item>
        
        <NavDropdown.Item href="/" id="dropdown">Madinaty Sporting Club</NavDropdown.Item>
       
        <NavDropdown.Item href="/" id="dropdown">Board Members</NavDropdown.Item>
       
          </NavDropdown>

         

          <NavDropdown title="Membership" id="basic-nav-dropdown" 
          id="collasible-nav-dropdown" 
          id="dropdown-toggle"
          show={show2}
          onMouseEnter={showDropdown2} 
         onMouseLeave={hideDropdown2}
          >
        <NavDropdown.Item href="/" id="dropdown">Membership Renewal Fees</NavDropdown.Item>
        
        <NavDropdown.Item href="/" id="dropdown">New Membership</NavDropdown.Item>
       
        <NavDropdown.Item href="/" id="dropdown">E-Payment</NavDropdown.Item>
        
          </NavDropdown>

          <NavDropdown title="Sports & Academics" id="basic-nav-dropdown"
          id="collasible-nav-dropdown"
          id="dropdown-toggle" 
          show={show3}
          onMouseEnter={showDropdown3} 
         onMouseLeave={hideDropdown3} >
        <NavDropdown.Item href="/Football" id="dropdown">Football Academy</NavDropdown.Item>
        
        <NavDropdown.Item href="/" id="dropdown">Basketball Academy</NavDropdown.Item>
       
        <NavDropdown.Item href="/" id="dropdown">View All</NavDropdown.Item>
        
          </NavDropdown>

          <NavDropdown title="Cultural Center" id="basic-nav-dropdown" 
          id="collasible-nav-dropdown" 
          id="dropdown-toggle"
          show={show4}
          onMouseEnter={showDropdown4} 
         onMouseLeave={hideDropdown4}>
        <NavDropdown.Item href="/" id="dropdown">Library</NavDropdown.Item>
        
        <NavDropdown.Item href="/" id="dropdown">Academics</NavDropdown.Item>
       
        <NavDropdown.Item href="/"id="dropdown">Seminars</NavDropdown.Item>

        <NavDropdown.Item href="/" id="dropdown">Social Programs</NavDropdown.Item>
        <NavDropdown.Item href="/" id="dropdown">Children's Cultural Program</NavDropdown.Item>
        
          </NavDropdown>


          <NavDropdown title="Services" 
          
          id="dropdown-toggle"
          show={show5}
          onMouseEnter={showDropdown5} 
         onMouseLeave={hideDropdown5}
          >
        <NavDropdown.Item href="/" id="dropdown">Facilities</NavDropdown.Item>
        
        <NavDropdown.Item href="/" id="dropdown">Restaurants</NavDropdown.Item>
       
        <NavDropdown.Item href="/" id="dropdown">Fitness & Spa</NavDropdown.Item>

        <NavDropdown.Item href="/" id="dropdown">Trips</NavDropdown.Item>
       
        
          </NavDropdown>


          
          <NavDropdown title="Media" 
          id="collasible-nav-dropdown" 
          id="dropdown-toggle"
          show={show6}
          onMouseEnter={showDropdown6} 
         onMouseLeave={hideDropdown6}>
        <a href="/" id="dropdown">News</a>
        
        <NavDropdown.Item href="/" id="dropdown" >Gallery</NavDropdown.Item>
       
        <NavDropdown.Item href="/" id="dropdown">Events Calendar</NavDropdown.Item>

        <NavDropdown.Item href="/" id="dropdown">Club Achievements</NavDropdown.Item>
       
        
          </NavDropdown>

         <div style={{position:"relative",left:"8em"}} className="nav1"> 
         
          <Nav.Link href="/"  id="collasible-nav-dropdown1" >
          <img
        src="/images/pay.png"
        width="45em"
        height="45em"
        className="image-hover-highlight"
        
        
      
      />
      </Nav.Link>
        
       
          <Nav.Link href="/"  id="collasible-nav-dropdown1" >AR</Nav.Link>
          <Nav.Link href="/"  id="collasible-nav-dropdown1" >  
           <img
        src="/images/s1.png"
        width="20em"
        height="20em"
        className="image-hover-highlight1"
        
      
      />
      </Nav.Link>
          	
    
        </div>



     
    </Nav>
   
         
    </Navbar.Collapse>
</Navbar>
</div>
</div>
 

);
}
 
export default NavBar;
