
import "./footer.css";
import { FaLinkedin, FaGithub, } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          className="social-link"
          href="https://github.com/RG-GitUser"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="social-link"
          href="https://www.linkedin.com/in/riley-gaffney-0312a1291/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="footer-text">
        <p>© {new Date().getFullYear()} Riley Gaffney</p>
        <p> All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;