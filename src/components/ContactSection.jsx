import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function LeftSection() {
  return (
    // form section

    <Form as={Col} xs={12} md={12} lg={6}>
      <div style={{ textAlign: "left" }}>
        <h3 style={{ fontWeight: 800, color: "#23001e" }}>Connect With Me</h3>
        <p style={{ fontWeight: 500, color: "#212529", fontSize: "1.2rem" }}>
          If you want to hire me or know more about my work, send a message from
          right below or connect with me on my Social Platforms.
        </p>
      </div>
      <Form.Group
        className="mb-3"
        controlId="formGroupName"
        style={{
          textAlign: "left",
          fontWeight: 800,
          color: "#23001e",
          fontSize: "1.2rem",
        }}
      >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your NAME." />
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="formGroupEmail"
        style={{
          textAlign: "left",
          fontWeight: 800,
          color: "#23001e",
          fontSize: "1.2rem",
        }}
      >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="formGroupPassword"
        style={{
          textAlign: "left",
          fontWeight: 800,
          color: "#23001e",
          fontSize: "1.2rem",
        }}
      >
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textArea"
          rows={6}
          placeholder="Enter your Message."
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Button
          type="button"
          variant="dark"
          style={{ float: "right", margin: "0 5%", padding: ".75rem 1.5rem" }}
        >
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}

export function RightSection() {
  return (
    <Col xs={12} md={12} lg={6}>
      <div style={{ textAlign: "right" }}>
        <h2
          style={{
            textDecoration: "none",
            color: "#23001e",
            fontWeight: "800",
            margin: "0 0 0 0",
          }}
        >
          Email
        </h2>
        <a
          href="#"
          style={{
            textDecoration: "none",
            fontSize: "1.2rem",
            color: "#212529",
            fontWeight: "600",
          }}
        >
          xyz@gmail.com
        </a>

        <h2
          style={{
            textDecoration: "none",
            color: "#23001e",
            fontWeight: "800",
            margin: "3% 0 0 0",
          }}
        >
          Address
        </h2>
        <a
          href="#"
          style={{
            textDecoration: "none",
            fontSize: "1.2rem",
            color: "#212529",
            fontWeight: "600",
          }}
        >
          Rambaug-4, Kalyan West, Maharashtra.
        </a>

        <h2
          style={{
            textDecoration: "none",
            color: "#23001e",
            fontWeight: "800",
            margin: "3% 0 0 0",
          }}
        >
          Social
        </h2>
        <div> 
          
          <a href="#" style={{ scale: "2" }}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"  style = {{height:"4rem",margin:"2% 2.5%"}}/>
          </a>
          <a href="#">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" style = {{height:"4rem",margin:"2% 2.5%"}}/>
          </a>
          <a href="#">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" style = {{height:"4rem",margin:"2% 2.5%"}}/>
          </a>
          <a href="#">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" style = {{height:"4rem",margin:"2% 0 2% 0%"}}/>
          </a>
        </div>
      </div>
    </Col>
  );
}
