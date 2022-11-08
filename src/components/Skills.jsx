import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

function SkillSection({skillName, imgSrc}) {
  return (
    <Col className="skillBox col-lg-4 col-sm-6">
      <Image src={imgSrc} fluid className="skillImage"></Image>
      <p>{skillName}</p>
    </Col>
  );
}

export default SkillSection;
