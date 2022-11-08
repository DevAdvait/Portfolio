
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PageNavbar from "./components/Navbar";

import IntroSection from "./components/Intro";
import SkillSection from "./components/Skills";
import ProjectSection from "./components/Projects";
import {LeftSection,RightSection} from "./components/ContactSection";

import "./App.css";

function App() {
  const skillsInfo = [
    {
      skill: "HTML",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      skill: "CSS",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      skill: "JavaScript",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      skill: "React",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      skill: "Bootstrap",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      skill: "NodeJs",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      skill: "MongoDb",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      skill: "Python",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      skill: "Blender",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
    },
  ];

  return (
    <div className="App">
      <PageNavbar />
      <IntroSection />
      <hr></hr>
      <Container fluid>
        <Row className="skill-section">
          <h1>Skills & Tools</h1>
          <p>For recuiters who know what they are looking for...</p>
          {skillsInfo.map((ele) => (
            <SkillSection skillName={ele.skill} imgSrc={ele.imgSrc} />
          ))}
        </Row>

        <Row className="projects-section">
          <ProjectSection />
        </Row>

        <Row className="contact-section">
          <LeftSection/>
          <RightSection/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
