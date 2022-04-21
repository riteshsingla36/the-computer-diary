import React from "react";
import "../Css/footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <span className="head">The Computer Diary</span>
        <br />
        <span>
          The Computer Diary is a leading Ed Tech company striving to provide
          the best learning material on technical and non-technical subjects.
        </span>
      </div>
      <div>
        <span className="head">ABOUT US</span>
        <br />
        <span>Company</span>
        <br />
        <span>Our Team</span>
        <br />
        <span>Careers</span>
        <br />
        <span>Helping</span>
        <br />
        <span>Become A Teacher</span>
      </div>
      <div>
        <span className="head">TERMS</span>
        <br />
        <span>Terms of use</span>
        <br />
        <span>Privacy Policy</span>
        <br />
        <span>Cookies Policy</span>
        <br />
        <span>Refund Policy</span>
        <br />
        <span>FAQ</span>
      </div>
      <div>
        <span className="head">EXTRA LINKS</span>
        <br />
        <span>Dev Tools</span>
        <br />
        <span>Free Graphics</span>
        <br />
        <span>File Conversion</span>
        <br />
        <span>Net Meeting</span>
        <br />
        <span>Whiteboard</span>
      </div>
      <div>
        <span className="head">CONTACT</span>
        <br />
        <span>The Computer Diary India Private Limited</span>
        <br />
        <div className="social">
          <span>
            <FacebookIcon className="facebook" />
          </span>
          <span>
            <InstagramIcon className="instagram" />
          </span>
          <span>
            <TwitterIcon className="twitter" />
          </span>
          <span>
            <YouTubeIcon className="youtube" />
          </span>
          <span>
            <LinkedInIcon className="linkedin" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
