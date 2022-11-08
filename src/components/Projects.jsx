import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function ProjectSection() {
  const projectDetails = [
    {
      title: "Project Title",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus facere explicabo animi nemo ad beatae quae quam inventore quas et maxime consequatur officia illum perferendis quasi perspiciatis, veniam facilis hic?",
      imgSrc:
        "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=826&t=st=1667741695~exp=1667742295~hmac=9dcc9e449db32484e9a9abe34ef8d396390c59af6785783b050bed3892816958",
    },
    {
      title: "Project Title",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus facere explicabo animi nemo ad beatae quae quam inventore quas et maxime consequatur officia illum perferendis quasi perspiciatis, veniam facilis hic?",
      imgSrc:
        "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=826&t=st=1667741695~exp=1667742295~hmac=9dcc9e449db32484e9a9abe34ef8d396390c59af6785783b050bed3892816958",
    },
    {
      title: "Project Title",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus facere explicabo animi nemo ad beatae quae quam inventore quas et maxime consequatur officia illum perferendis quasi perspiciatis, veniam facilis hic?",
      imgSrc:
        "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=826&t=st=1667741695~exp=1667742295~hmac=9dcc9e449db32484e9a9abe34ef8d396390c59af6785783b050bed3892816958",
    },
    {
      title: "Project Title",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus facere explicabo animi nemo ad beatae quae quam inventore quas et maxime consequatur officia illum perferendis quasi perspiciatis, veniam facilis hic?",
      imgSrc:
        "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=826&t=st=1667741695~exp=1667742295~hmac=9dcc9e449db32484e9a9abe34ef8d396390c59af6785783b050bed3892816958",
    },
  ];

  return (
    <Row xs={1} md={2} lg={4} className="g-4">
      {projectDetails.map((ele) => (
        <Col>
          <Card style={{backgroundColor:"#ef5b5b",borderRadius:"20px",marginBottom:"1rem"}}>
            <Card.Img variant="top" src={ele.imgSrc} style={{height:"200px",alignSelf:"center",marginTop:"1rem",borderRadius:"10px",objectFit:"cover"}}/>
            <Card.Body>
              <Card.Title>{ele.title}</Card.Title>
              <Card.Text>{ele.text}</Card.Text>
              <Button variant="dark" >Know More!</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ProjectSection;
