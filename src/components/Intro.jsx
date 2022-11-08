import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function IntroSection() {
  return (
    <Container className="intro-section" fluid>
      <Row className="intro-row">
        
        <Col
          xs={{ order: "1" }}
          xxs={{ order: "1" }}
          sm={{ order: "1" }}
          md={{ order: "1" }}
          lg={{ order: "0" }}

          className="intro-text"
        >
          <div >
            <h1 className="intro-title">Hi there, I'm Advait Tumbre 👋</h1>
            <br />
            <p className="intro-para">
            <span className="qualification">Full Stack Web Developer</span> , Avid Tech Enthusiast & Creative Solutions Expert,
              I help professionals launch their Business Websites, Blog Posts, and more.
            </p>
          </div>
        </Col>
        <Col
          xs={{ order: "0" }}
          xxs={{ order: "0" }}
          sm={{ order: "0" }}
          md={{ order: "0" }}
          lg={{ order: "1" }}
        >
          <Image
            src="https://sohohindi.in/wp-content/uploads/2021/03/HelloIMG1641289291441.jpeg"
            roundedCircle
            className="profile-image"
            alt="Profile Picture"
            
          ></Image>
        </Col>
      </Row>
    </Container>
  );
}

export default IntroSection;
