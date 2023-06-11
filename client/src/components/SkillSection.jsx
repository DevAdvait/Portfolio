import { Card, Row, Col } from "react-bootstrap";
import "../styles/skillSection.css";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaGithub,
  FaBootstrap,
  FaPython,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const SkillsSection = () => {
  const skills = [
    { name: "React", logo: FaReact },
    { name: "MongoDB", logo: DiMongodb },
    { name: "Express", logo: SiExpress },
    { name: "Node.js", logo: FaNodeJs },
    { name: "HTML5", logo: FaHtml5 },
    { name: "CSS3", logo: FaCss3 },
    { name: "JavaScript", logo: IoLogoJavascript },
    { name: "Bootstrap", logo: FaBootstrap },
    { name: "Github", logo: FaGithub },
    { name: "Python", logo: FaPython },
  ];

  return (
    <div className="container skill-container">
      <Row className="card-row">
        {skills.map((skill, index) => (
          <Col
            md={4}
            sm={6}
            xs={6}
            key={index}
            className="card-wrapper"
            style={{ "--card-index": index }}
          >
            <Card className="skill-card">
              <div className="skill-icon">
                <skill.logo size={64} />
              </div>
              <Card.Body>
                <Card.Title>{skill.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SkillsSection;
