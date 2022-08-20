import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-bg d-flex align-items-center flex-column justify-content-center">
        <div>
          <a href="https://github.com/MahmoudKafrawy" className="text-decoration-none">
            <div style={{ color: "white" }}>
              <span className="ps-1 "> MahmoudKafrawy /</span>
              <i className="fa fa-github"></i>
            </div>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/mahmoud-elkafrawy-2a340023a/" className="text-decoration-none">
            <div style={{ color: "white" }}>
              <span className="ps-1"> Mahmoud Elkafrawy</span>
              <i className="fa fa-linkedin "></i>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
