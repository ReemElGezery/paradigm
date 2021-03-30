import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import "../css/styles.css";
import "../css/home.css";
import { Button } from 'react-bootstrap';
import ReactCrop from 'react-image-crop';
import FadeIn from 'react-fade-in';
import Nav from '../components/NavBar';
import Footer from '../components/footer'
import TextScroller from "../components/TextScroller";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { makeStyles } from "@material-ui/core/styles";
import Calendar1 from '../components/Calendar'
import ReactDOM from 'react-dom';
import { useEffect, useState } from "react";




const Home = () => {
    const [show, setShow] = useState(true);
    const [show1, setShow1] = useState(true);
    const [isVisible, setIsVisible] = useState(false);


    const handelClick = (e) => {
        setShow(!show);
    }

    const handelClick1 = (e) => {
        setShow1(!show1);
    }

    const toggleVisibility = () => {
        if (window.pageYOffset > 400) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);


    const toggleStrikethrough = (e) => {
        e.target.style.backgroundColor =
            e.target.style.backgroundColor === "transparent" ? "" : "white";
        e.target.style.Color =
            e.target.style.Color === "white" ? "" : "black";
    };

    return (
        <div >


            <div className="x">

                <div className="move"> <TextScroller text=" Welcome to Madinaty Sporting Club | Welcome to Madinaty Sporting Club | Welcome to Madinaty Sporting Club | Welcome to Madinaty Sporting Club |" /> </div>

            </div>

            <div id="f">
                <a href="https://facebook.com">
                    <img type="image" src="/images/f.png" alt="Submit" width="9" height="20" href="https://www.facebook.com" />
                </a>
            </div>

            <div id="inst">
                <a href="https://instagram.com">
                    <img type="image" src="/images/inst.png" alt="Submit" width="16" height="16" href="https://www.facebook.com" />
                </a>
            </div>


            <div className="navdiv">
                <Nav></Nav>
            </div>

            <div id="container">


                <Carousel fade style={{ width: "100%", height: "30em" }}>


                    <Carousel.Item class="item">

                        <div >
                            <img
                                className="d-block w-100"
                                src="images/1.jpg"
                                alt="First slide"
                            />
                        </div>
                        <div class="carousel-item active align-items-center flex-column p-4">
                            <Carousel.Caption  >
                                <FadeIn>

                                    <p style={{ textAlign: "center", fontSize: "4vw", position: "relative", bottom: "5em" }}>One of The Largest Sports Club in Egypt.</p>

                                </FadeIn>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item class="item">

                        <img
                            className="d-block w-100"
                            src="images/2.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption class="carousel-item active align-items-center flex-column p-4">
                            <FadeIn>

                                <p style={{ textAlign: "center", fontSize: "4vw", position: "relative", bottom: "8em", color: "white" }}>Athletic Excellence & Community </p>
                                <p style={{ textAlign: "center", fontSize: "4vw", position: "relative", bottom: "8em", color: "white", right: "7em" }}>  Building.</p>
                            </FadeIn>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item class="item">
                        <img
                            className="d-block w-100"
                            src="images/3.jpg"
                            alt="Third slide"
                        />
                        <div class="carousel-item active align-items-center flex-column p-4">
                            <Carousel.Caption>
                                <FadeIn>
                                    <p style={{ textAlign: "center", fontSize: "4vw", position: "relative", bottom: "5em", right: "4em" }}>Engaging Spaces.</p>
                                </FadeIn>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item class="item">
                        <img
                            className="d-block w-100"
                            src="images/4.jpg"
                            alt="Fourth slide"
                        />

                        <Carousel.Caption class="carousel-item active align-items-center flex-column p-4">
                            <FadeIn>

                                <p style={{ textAlign: "center", fontSize: "4vw", position: "relative", bottom: "8em", color: "white" }}>Fully Equipped Modern Facilities  .</p>

                            </FadeIn>
                        </Carousel.Caption >
                    </Carousel.Item>

                    <Carousel.Item class="item">

                        <div >
                            <img
                                className="d-block w-100"
                                src="images/5.jpg"
                                alt="First slide"
                            />
                        </div>
                        <div class="carousel-item active align-items-center flex-column p-4">
                            <Carousel.Caption  >
                                <FadeIn>

                                    <p style={{ textAlign: "center", fontSize: "4vw", position: "relative", bottom: "3em", right: "1em" }}>Payment Packages for Your</p>
                                    <p style={{ textAlign: "center", fontSize: "4vw", position: "relative", bottom: "3em", right: "5em" }}> Convenience.</p>

                                </FadeIn>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <br></br>
            <div>
                <br></br>
                <div>
                    {show ? <img src="/images/img1.jpg" class="ad-mob"
                        width="1000em"
                        height="150em"

                        style={{ position: "relative", left: "5em" }}
                    /> : null}



                    <button id="btn1" onClick={handelClick} >&#10005;</button>

                </div>

                <div className="scroll-to-top">
                    {isVisible &&
                        <div onClick={scrollToTop}>
                            <img src='/images/up1.PNG' width=" 50em" height="50em" alt='Go to top' />
                        </div>}
                </div>
            </div>

            <br></br>
            <br></br>
            <div className="flex-container">
                <div >
                    <img
                        src="http://madinaty.psdigital.me/Resources/assets/img/21.jpg"
                        width="400em"
                        height="340em"
                        className="styleimg"


                    />
                </div>

                <div className="all">

                    <h6 className="aboutus"> ABOUT US</h6>
                    <br></br>
                    <h5 className="aboutus1"> Welcome To Madinaty Sporting Club</h5>
                    <br></br>
                    <span>Madinaty Sporting Club is one of the biggest sports and cultural hubs in Egypt and the Middle East. It is a comprehensive sports facility covering 200 acres of land,fostering athletic excellence, community building, self-development, and more.</span>
                    <br></br>
                    <br></br>

                    <span>The club is located in the thriving Madinaty City, developed by the Arab Company for Projects and Urban Development, Talaat Moustafa Group (TMG).</span>
                    <br></br>
                    <br></br>
                    <br></br>
                    <button href="/about" className="aboutbtn">READ MORE</button>

                </div>

                <div id="img1" >
                    {show1 ? <img src="http://madinaty.psdigital.me/Resources/assets/img/Celia 280x360_Mobile.jpg" class="ad-mob"
                        width="200em"
                        height="500em"

                        style={{ position: "relative", left: "-1em" }}
                    /> : null}


                    <button id="btn" onClick={handelClick1} >&#10005;</button>

                </div>



            </div>




            <div className="flex-container1">
                <div >
                    <h3 className="sports">Sports & Academics</h3>
                </div>


                <div className="sports2">
                    <span> Enjoy a wide range of world-class academies, like Liverpool Football Academy, </span>
                    <br></br>
                    <span>and Special Needs Sports, learning at the hands of expert coaches at the best sports </span>
                    <br></br>
                    <span>community in Cairo.</span>
                </div>

            </div>

            <div className="slider2">
                <div style={{ zIndex: "2 " }}>

                    <div id="container1">
                        {/* style={{position:"relative",top:"20em"}} */}

                        <Carousel fade style={{ width: "100%", height: "50em" }}>

                            <Carousel.Item class="item">



                                <div id="preview-image-wrapper">
                                    <small class="firstOverlayLine"></small>
                                    <small class="secondOverlayLine"> </small>
                                    <small class="thirdOverlayLine"></small>
                                    <small class="fourthOverlayLine"></small>
                                    <img
                                        className="d-block w-100"
                                        src="http://madinaty.psdigital.me/ImagesRepository/06717144-98c3-4eac-a24d-79ae6e6ddff5_actual.jpg"
                                        alt="First slide"
                                        id="1"


                                    />
                                    <div style={{ position: "relative", bottom: "8em" }} className="box" className="flex">
                                        <div >
                                            <h6 id="slide2btn">Football</h6>
                                            <text className="slide2txt">under the supervision of captain Tarek khairy</text>
                                        </div>
                                        <div style={{ position: "relative", left: "6em" }} >
                                            <h6 id="slide2btn">Swimming</h6>
                                            <div className="slide2txt">
                                                <text >At TM ,a team of expert coaches trained </text>
                                                <br></br>
                                                <text>at teaching kids of all ages</text>
                                            </div>
                                        </div>

                                        <div style={{ position: "relative", left: "13em" }}>
                                            <h6 id="slide2btn">Gymnastics</h6>
                                            <text className="slide2txt" style={{ position: "relative", left: "2em" }}>Gymnastics</text>
                                        </div>
                                        <div style={{ position: "relative", left: "20em" }}>
                                            <h6 id="slide2btn">Basketball</h6>
                                            <text className="slide2txt">Headed by captain Tarek khairy</text>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item active align-items-center flex-column p-4">
                                    <Carousel.Caption  >
                                        <FadeIn>



                                        </FadeIn>
                                    </Carousel.Caption>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item class="item">



                                <div id="preview-image-wrapper">
                                    <small class="firstOverlayLine"></small>
                                    <small class="secondOverlayLine"> </small>
                                    <small class="thirdOverlayLine"></small>
                                    <small class="fourthOverlayLine"></small>
                                    <img
                                        className="d-block w-100"
                                        src="http://madinaty.psdigital.me/ImagesRepository/e7a5a9f3-a3d6-4a64-bb07-3e4e4bd44723_actual.jpg"
                                        alt="First slide"
                                        id="1"


                                    />
                                    <div style={{ position: "relative", bottom: "18em" }} className="box" className="flex">
                                        <div >
                                            <h6 id="slide2btn">Football</h6>
                                            <text className="slide2txt">under the supervision of captain Tarek khairy</text>
                                        </div>
                                        <div style={{ position: "relative", left: "8em" }}  >
                                            <h6 id="slide2btn">Swimming</h6>
                                            <div className="slide2txt">
                                                <text >At TM ,a team of expert coaches trained </text>
                                                <br></br>
                                                <text>at teaching kids of all ages</text>
                                            </div>
                                        </div>

                                        <div style={{ position: "relative", left: "13em" }}>
                                            <h6 id="slide2btn">Gymnastics</h6>
                                            <text className="slide2txt" style={{ position: "relative", left: "2em" }}>Gymnastics</text>
                                        </div>
                                        <div style={{ position: "relative", left: "20em" }}>
                                            <h6 id="slide2btn">Basketball</h6>
                                            <text className="slide2txt">Headed by captain Tarek khairy</text>
                                        </div>
                                    </div>
                                </div>

                            </Carousel.Item>
                            <Carousel.Item class="item">



                                <div id="preview-image-wrapper">
                                    <small class="firstOverlayLine"></small>
                                    <small class="secondOverlayLine"> </small>
                                    <small class="thirdOverlayLine"></small>
                                    <small class="fourthOverlayLine"></small>
                                    <img
                                        className="d-block w-100"
                                        src="http://madinaty.psdigital.me/ImagesRepository/15440e7d-36f0-40f0-9165-217c3d36592e_actual.jpg"
                                        alt="Third slide"
                                        id="3"


                                    />
                                    <div style={{ position: "relative", bottom: "12em" }} className="box" className="flex" onClick={toggleStrikethrough}>
                                        <div >
                                            <h6 id="slide2btn">Football</h6>
                                            <text className="slide2txt">under the supervision of captain Tarek khairy</text>
                                        </div>
                                        <div style={{ position: "relative", left: "6em" }} >
                                            <h6 id="slide2btn">Swimming</h6>
                                            <div className="slide2txt">
                                                <text >At TM ,a team of expert coaches trained </text>
                                                <br></br>
                                                <text>at teaching kids of all ages</text>
                                            </div>
                                        </div>

                                        <div style={{ position: "relative", left: "13em" }}>
                                            <h6 id="slide2btn">Gymnastics</h6>
                                            <text className="slide2txt" style={{ position: "relative", left: "2em" }}>Gymnastics</text>
                                        </div>
                                        <div style={{ position: "relative", left: "20em" }}>
                                            <h6 id="slide2btn">Basketball</h6>
                                            <text className="slide2txt">Headed by captain Tarek khairy</text>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item active align-items-center flex-column p-4">
                                    <Carousel.Caption  >
                                        <FadeIn>



                                        </FadeIn>
                                    </Carousel.Caption>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item class="item">



                                <div id="preview-image-wrapper">
                                    <small class="firstOverlayLine"></small>
                                    <small class="secondOverlayLine"> </small>
                                    <small class="thirdOverlayLine"></small>
                                    <small class="fourthOverlayLine"></small>
                                    <img
                                        className="d-block w-100"
                                        src="http://madinaty.psdigital.me/ImagesRepository/c67f862e-92c0-4a88-8cb8-907136dd6769_actual.jpg"
                                        alt="Fourth slide"
                                        id="4"


                                    />
                                    <div style={{ position: "relative", bottom: "8em" }} className="box" className="flex">
                                        <div >
                                            <h6 id="slide2btn">Football</h6>
                                            <text className="slide2txt">under the supervision of captain Tarek khairy</text>
                                        </div>
                                        <div style={{ position: "relative", left: "6em" }} >
                                            <h6 id="slide2btn">Swimming</h6>
                                            <div className="slide2txt">
                                                <text >At TM ,a team of expert coaches trained </text>
                                                <br></br>
                                                <text>at teaching kids of all ages</text>
                                            </div>
                                        </div>

                                        <div style={{ position: "relative", left: "13em" }}>
                                            <h6 id="slide2btn">Gymnastics</h6>
                                            <text className="slide2txt" style={{ position: "relative", left: "2em" }}>Gymnastics</text>
                                        </div>
                                        <div style={{ position: "relative", left: "20em" }}>
                                            <h6 id="slide2btn">Basketball</h6>
                                            <text className="slide2txt">Headed by captain Tarek khairy</text>
                                        </div>
                                    </div>
                                </div>

                            </Carousel.Item>


                        </Carousel>
                    </div>

                </div>
                <button href="/about" className="sportsbtn">ALL SPORTS & ACADEMICS</button>
                <br></br>
                <br></br>
                <br></br>
                <h3 className="sports1">EVENTS & CALENDAR</h3>
                <div className="flex-container2">

                    <div className="calendar1" >
                        <img
                            src="http://www.madinatysportsclub.com/ImagesRepository/7517779a-bf40-424c-8ceb-4d38ed557fa0_actual.jpg"
                            width="400em"
                            height="300em"



                        />
                        <h6 className="event">Nov 25,2020</h6>
                        <h6 className="event">Fun day for Women's club</h6>
                        <button href="#" className="eventbtn">see event</button>
                    </div>


                    <div className="Calendar1">
                        {/* <Calendar /> */}
                        <Calendar1 />
                        <button href="#" className="calendarbtn">see event</button>
                        <button href="/about" className="calevbtn">SEE CALENDAR</button>




                    </div>

                </div>




            </div>

            <div className="slider3">

                <Carousel style={{ width: "100%", height: "em", backgroundColor: "#d3d8d6" }}>


                    <Carousel.Item class="item">
                        <h3 className="newshead">OUR NEWS</h3>

                        <div className='row'>
                            <div className='col-xs-6'>
                                <div className="newpic">
                                    <img

                                        src="http://www.madinatysportsclub.com/ImagesRepository/7eb9cbb8-c416-4f67-9dec-31f08ed1adc5_actual.jpg"
                                        width="100%"
                                        height="100%"
                                        alt="First slide"
                                        className="imgnew"
                                    />
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div >
                            <Carousel.Caption className="news"  >
                                <div >

                                    <h6 style={{ color: "#f6ba06", position: "relative", left: "-7em" }}>oct 29,2020</h6>
                                    <h6 style={{ color: "#0c5ca9", fontSize: "1.4em", position: "relative", left: "-3.5em" }}>Mouled El Naby</h6>
                                    <h6 style={{ color: "#828990", fontSize: "0.8em" }}>kindly be informed that the 29th of October is an official </h6>
                                    <h6 style={{ color: "#828990", fontSize: "0.8em" }}>holiday.Membership &administrative offices will be closed</h6>
                                    <button href="/about" className="newsbtn1">READ MORE</button>
                                </div>


                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                </Carousel>

                <button href="#" className="Allbtn">All NEWS</button>
            </div>


            <div className="sponsors">
                <h3 className="sports">Our Sponsors</h3>
                <br></br>
                <div className="flex-container3">
                    <div >
                        <img
                            src="http://www.madinatysportsclub.com/ImagesRepository/5c5a7842-3b43-4ef0-a455-8e3b1c24b8ca_actual.png"
                            width="100em"
                            height="100em"
                            className="sponsorimg"



                        />


                    </div>

                    <div >
                        <img
                            src="http://www.madinatysportsclub.com/ImagesRepository/de7bd945-2ec3-4cc6-9cbd-f5c1c6896fbb_actual.png"
                            width="100em"
                            height="100em"
                            className="sponsorimg"



                        />


                    </div>
                    <div >
                        <img
                            src="http://www.madinatysportsclub.com/ImagesRepository/d9d3041a-cd06-4101-8e76-6e811df11fba_actual.png"
                            width="100em"
                            height="100em"
                            className="sponsorimg"


                        />



                    </div>
                    <div >
                        <img
                            src="http://www.madinatysportsclub.com/ImagesRepository/db35b91f-be52-4ec5-8617-42a050a5d3c9_actual.png"
                            width="100em"
                            height="100em"
                            className="sponsorimg"


                        />


                    </div>
                    <div >
                        <img
                            src="http://www.madinatysportsclub.com/ImagesRepository/d67c30ff-b762-45d7-af28-4df0fdce0d04_actual.png"
                            width="100em"
                            height="100em"
                            className="sponsorimg"



                        />


                    </div>
                </div>

            </div>

            <div className="Footer">
                <Footer></Footer>
            </div>





        </div>





    );
}

export default Home;