import React from 'react';
import hd1080 from './images/hd1080.png';

export default function footerComponent(){
    return (
        <footer>
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-3">
                <div className="footerlogo">LOGO</div>
                <p className="aboutcompanytext">Lorem ipsum dolor sit amet, consec adipiscing elit. Nam eusem
                  scelerisque tempor, varius quam luctus dui. Mauris magna metus nec.</p>
                <ul className="social-link">
                  <li><a href="#."><i className="fa fa-facebook" /></a></li>
                  <li><a href="#."><i className="fa fa-twitter" /></a></li>
                  <li><a href="#."><i className="fa fa-google" /></a></li>
                  <li><a href="#."><i className="fa fa-pinterest-p" /></a></li>
                  <li><a href="#."><i className="fa fa-instagram" /></a></li>
                </ul>
              </div>
              <div className="col-3">
                <h5 className="footer-title">Recent post</h5>
                <ul className="postlist">
                  <li>
                    <h6>Discover the bright side of design</h6>
                    <p>posted on 14th July, 2017</p>
                  </li>
                  <li>
                    <h6>We have more than 200 travel place</h6>
                    <p>posted on 14th July, 2017</p>
                  </li>
                </ul>
              </div>
              <div className="col-3">
                <h5 className="footer-title">Gallery</h5>
                <ul className="gallerylist">
                  <li><a href="#."><img src={hd1080} /></a></li>
                  <li><a href="#."><img src={hd1080} /></a></li>
                  <li><a href="#."><img src={hd1080} /></a></li>
                  <li><a href="#."><img src={hd1080} /></a></li>
                  <li><a href="#."><img src={hd1080} /></a></li>
                  <li><a href="#."><img src={hd1080} /></a></li>
                  <li><a href="#."><img src={hd1080} /></a></li>
                </ul>
              </div>
              <div className="col-3">
                <h5 className="footer-title">Get in touch</h5>
                <p className="aboutcompanytext">Lorem ipsum dolor sit amet, consec adipiscing elit. Nam eusem
                  scelerisque tempor, varius quam luctus dui. Mauris magna metus nec.</p>
                <ul className="addresslist">
                  <li><i className="fa fa-map-marker" /> Tower-12, magarpatta city, pune</li>
                  <li><i className="fa fa-phone" /> +49 123 456 789 </li>
                  <li><i className="fa fa-at" /> info@chia-travel.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}