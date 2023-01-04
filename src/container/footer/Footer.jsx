import React from "react";
import logo from "../../assets/logo.png";

import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
          >
            <div className="brand">
              <div className="logo">
                <img src={logo} alt="Logo" />
              </div>
              <p className="desc">
                A new way to make the payments easy, reliable and secure.
              </p>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="300"
          >
            <div className="useful-col">
              <p className="title">Usefull Links</p>
              <div className="links">
                <a href="/#">Content</a>
                <a href="/#">How it Works</a>
                <a href="/#">Create</a>
                <a href="/#">Explore</a>
                <a href="/#">Terms & Services</a>
              </div>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-6 col-lg-2"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="500"
          >
            <div className="community-col">
              <p className="title">Community</p>
              <div className="links">
                <a href="/#">Help Center</a>
                <a href="/#">Partners</a>
                <a href="/#">Suggestions</a>
                <a href="/#">Blog</a>
                <a href="/#">Newsletters</a>
              </div>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="700"
          >
            <div className="partner-col">
              <p className="title">Partner</p>
              <div className="links">
                <a href="/#">Our Partner</a>
                <a href="/#">Become a Partner</a>
              </div>
            </div>
          </div>
        </div>
        <div className="more-info">
          <p className="rights">
            <span>Copyright</span> &copy; 2021 HooBank. All Rights Reserved.
          </p>
          <div className="social">
            <a href="/#">
              <BsInstagram className="instagram" />
            </a>
            <a href="/#">
              <BsFacebook className="facebook" />
            </a>
            <a href="/#">
              <BsTwitter className="twitter" />
            </a>
            <a href="/#">
              <BsLinkedin className="linkedin" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
