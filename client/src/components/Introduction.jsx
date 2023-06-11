import { Container, Row, Col } from "react-bootstrap";
import "../styles/introduction.css"; 
import ProfilePic from "../assets/profilePic.JPG";
import WavingText from "./WavingText";

const Introduction = () => {
  return (
    <Container>
      <Row className="intro-row">
        <Col md={6} className="order-md-1">
          <div className="left-content">
            <h1>
              Hi there, I'm{" "}
              <WavingText />
              <span className="wave">👋</span>
            </h1>
            <p className="slide-up">
              Full Stack Web Developer & Avid Tech Enthusiast , I help professionals launch their Business
              Websites, Blog Posts, and more.
            </p>
          </div>
        </Col>
        <Col md={6} className="order-md-2">
          <div className="right-content">
            <img
              src={ProfilePic}
              alt="Advait's Profile"
              className="profile-pic"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Introduction;
