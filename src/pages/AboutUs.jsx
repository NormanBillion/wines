import React from 'react';
import Header from '../components/Header';
import Footer from './Footer';
import '../Css/AboutUs.css';
import image from "../assets/wine-glass.jpg";
import nom from '../assets/wine-glasses.jpg';
import norman from '../assets/Norman.jpg'

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div class="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>Resize the browser window to see that this page is responsive by the way.</p>
      </div>

      <h2>Our Team</h2>
      <div class="row">
        <div class="column">
          <div class="card">
            <img src={nom} alt="Wine Glass" style= {{ width : "100%"}}/>
              <div class="container">
                <h2>Jane Doe</h2>
                <p class="title">CEO & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p><button class="button">Contact</button></p>
              </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src= {norman} alt="norman" style= {{ width : "100%"}}/>
              <div class="container">
                <h2>Norman Billion</h2>
                <p class="title">Captain</p>
                <p></p>
                <p>NormanDa@gmail.com</p>
                <p><button class="button">Contact</button></p>
              </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
          <div className="logo">
            <img id="wineGlass" src={image} alt="john" />
          </div>
            {/* <img src="/w3images/team3.jpg" alt="John" style= {{ width : "100%"}}/> */}
              <div class="container">
                <h2>John Doe</h2>
                <p class="title">Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
                <p><button class="button">Contact</button></p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )

}

export default AboutUs