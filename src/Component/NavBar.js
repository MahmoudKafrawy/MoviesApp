import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../images/logo.png";
export const Navbar = ({ search }) => {
  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logo} alt="dfs" />
            </a>
          </Col>
          <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search  w-100">
              <i className="fa fa-search"></i>
              <input
                type="text"
                className="form-control"
                placeholder="ابحث"
                onChange={(e) => search(e.target.value, 1)}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Navbar;
