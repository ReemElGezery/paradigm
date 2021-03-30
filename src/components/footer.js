import React from "react"; 
import { 
Box, 
Container, 
Row, 
Column, 
FooterLink, 
Heading, 
} from "./FooterStyles"; 
import { useState } from 'react';
import "../css/home.css";



const Footer = () => { 
	
	


return ( 
	<div >
	<Box> 
	
	<Container className="footer1"> 
		<Row> 
		<Column> 
			<Heading className="heading">LOCATION</Heading> 
			<h6 style={{color:"grey",fontsize:"0.4em"}}>Madinaty is located at Km 33 of the ~{"\n"} Cairo-Suez rd, a short ten-minute ~{"\n"} drive from Heliopolis, and 30-minute from downtown Cairo.~{"\n"} Madinaty Sporting Club is in the ~{"\n"} heart of Madinaty along Madinaty ~{"\n"}Road,</h6>
			<FooterLink href="https://www.google.com/maps" id="direction">Get Direction</FooterLink> 
			<h6 style={{color:"white"}}>For more information</h6>
			<FooterLink href="#" id="direction">01142020220</FooterLink> 
			<br></br>
			<br></br>
			<h6 style={{color:"white",fontSize:"10px",width:"50em"}}>©2021. All rights reserved.Developed & Designed by PSdigital</h6>
			
		</Column> 
		<Column> 
			<Heading>OTHER LINKS</Heading> 
			<FooterLink href="#">Sports & Academics</FooterLink> 
			<FooterLink href="#">Media</FooterLink> 
			<FooterLink href="#">Trips</FooterLink> 
			<FooterLink href="#">Contact us</FooterLink> 
     
		</Column> 
		<Column> 
			<Heading>SITEMAP</Heading> 
			<FooterLink href="#">About Us</FooterLink> 
			<FooterLink href="#">Membership</FooterLink> 
			<FooterLink href="#">Sports & Academics</FooterLink> 
			<FooterLink href="#">Cultural Center</FooterLink> 
      <FooterLink href="#">Services</FooterLink> 
      <FooterLink href="#">Media</FooterLink> 
		</Column> 
		<Column> 
			<Heading>Newsletter</Heading> 
			<div class="input-container">
				<div style={{paddingTop:"0.5em"}}>
    <input type="text" class="input-field" class="placeholder-center" placeholder="Enter your Email..."/>
	</div>
    <button class="input-button">Subscribe &#8811;</button>
</div>

	<br></br>	
	<br></br>	
	
		</Column> 
		
		</Row> 
	</Container> 
	</Box> 
	</div>
); 
}; 
export default Footer; 
