import { GrInstagram } from "react-icons/gr";
import { FaTwitter, FaFacebook } from "react-icons/fa";
import { BsLinkedin, BsGlobe } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { IoAccessibilitySharp } from "react-icons/io5";
import Image from "next/image";
import im from "../public/logobb.png";
import { useState } from "react";

const Footer = () => {
  const [se, setSe] = useState(false);
  const categories = [
    "UI/UX Design",
    "Animation",
    "Marketing",
    "Graphics Design",
    "Product Design",
  ];

  const handleCategory = () => {
    setSe((prevSe) => !prevSe);
  };
  return (
    <div>
      <div className="footer-wraper">
        <div className="footer-flex-1">
          <div className="footer-flex-1-child">
            <article className="ar" onClick={handleCategory}>
              <span className="footer-item-title">Categories</span>
              {se &&
                categories.map((category) => {
                  return (
                    <ul>
                      <li>
                        <a href="#" id="res-categories-item">
                          <span>{category}</span>
                        </a>
                      </li>
                    </ul>
                  );
                })}
              <a className="categories-item" href="#">
                <span>Digital Marketing</span>
              </a>
              <a className="categories-item" href="#">
                <span>Writing and Translation</span>
              </a>
              <a className="categories-item" href="#">
                <span>Video and Animation</span>
              </a>
              <a className="categories-item" href="#">
                <span>Music and Audio</span>
              </a>
              <a className="categories-item" href="#">
                <span>Programming and Tech</span>
              </a>
              <a className="categories-item" href="#">
                <span>Data</span>
              </a>
              <a className="categories-item" href="#">
                <span>Business</span>
              </a>
              <a className="categories-item" href="#">
                <span>Lifestyle</span>
              </a>
              <a className="categories-item" href="#">
                <span>Sitemap</span>
              </a>
            </article>
            <article className="ar">
              <span className="footer-item-title">About</span>
              <a className="categories-item" href="#">
                <span>Careers</span>
              </a>
              <a className="categories-item" href="#">
                <span>{`Press & News`}</span>
              </a>
              <a className="categories-item" href="#">
                <span>Partnerships</span>
              </a>
              <a className="categories-item" href="#">
                <span>Privacy Policy</span>
              </a>
              <a className="categories-item" href="#">
                <span>Terms of Service</span>
              </a>
              <a className="categories-item" href="#">
                <span>Intellectual property Claims</span>
              </a>
              <a className="categories-item" href="#">
                <span>Investor Relations</span>
              </a>
            </article>
            <article className="ar">
              <span className="footer-item-title">Support</span>
              <a className="categories-item" href="#">
                <span>{`Help & Support`}</span>
              </a>
              <a className="categories-item" href="#">
                <span>{`Trust & Safety`}</span>
              </a>
              <a className="categories-item" href="#">
                <span>Selling on Fiverr</span>
              </a>
              <a className="categories-item" href="#">
                <span>Buying on Fiverr</span>
              </a>
            </article>
            <article className="ar">
              <span className="footer-item-title">Community</span>
              <a className="categories-item" href="#">
                <span>Events</span>
              </a>
              <a className="categories-item" href="#">
                <span>Blogs</span>
              </a>
              <a className="categories-item" href="#">
                <span>Forum</span>
              </a>
              <a className="categories-item" href="#">
                <span>Community Standards</span>
              </a>
              <a className="categories-item" href="#">
                <span>Podcasts</span>
              </a>
              <a className="categories-item" href="#">
                <span>Affilate</span>
              </a>
              <a className="categories-item" href="#">
                <span>Invite a Friend</span>
              </a>
              <a className="categories-item" href="#">
                <span>Become a Seller</span>
              </a>
            </article>
            <article className="ar">
              <span className="footer-item-title">More from Early Office</span>
              <a className="categories-item" href="#">
                <span>Fiverr Business</span>
              </a>
              <a className="categories-item" href="#">
                <span>Fiverr Pro</span>
              </a>
              <a className="categories-item" href="#">
                <span>Fiverr Studios</span>
              </a>
              <a className="categories-item" href="#">
                <span>Fiverr Logo Maker</span>
              </a>
              <a className="categories-item" href="#">
                <span>Fiverr Guides</span>
              </a>
              <a className="categories-item" href="#">
                <span>Get Inspired</span>
              </a>
              <a className="categories-item" href="#">
                <span>ClearVoice</span>
                <br />
                <span className="categories-item-sub">Content Marketing</span>
              </a>
              <a className="categories-item" href="#">
                <span>Fiverr Workspace</span>
                <br />
                <span className="categories-item-sub">Invoice Software</span>
              </a>
              <a className="categories-item" href="#">
                <span>Learn</span>
                <br />
                <span className="categories-item-sub">Online Courses</span>
              </a>
              <a className="categories-item" href="#">
                <span>Working Not Working</span>
              </a>
            </article>
          </div>
          <div className="footerLine"></div>

          <div className="footer-flex-2">
            <span className="flex-2-sec1">
              <span
                style={{
                  marginRight: "20px",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                <Image src={im} />
              </span>
              <span style={{ fontSize: "12px" }}>© Early Office Ltd. 2022</span>
            </span>
            <span className="flex-2-sec1">
              <a href="http://twitter.com" className="flex-2-social">
                <span className="flex-2-icon">{<FaTwitter />}</span>
              </a>
              <a href="http://facebook.com" className="flex-2-social">
                <span className="flex-2-icon">{<FaFacebook />}</span>
              </a>
              <a href="http://linkedin.com" className="flex-2-social">
                <span className="flex-2-icon">{<BsLinkedin />}</span>
              </a>
              <a href="http://instagram.com" className="flex-2-social">
                <span className="flex-2-icon">{<GrInstagram />}</span>
              </a>

              <span className="flex-2-sec1-btn sec1-btn">
                {<BsGlobe className="sec1-btn-icon" />}English
              </span>
              <span className="flex-2-sec1-btn sec1-btn-2">
                {<BiDollar className="sec1-btn-icon" />}USD
              </span>
              <span className="flex-2-sec1-btn sec1-btn-3">
                {<IoAccessibilitySharp />}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
