import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiResponsive,
  DiGit,
} from "react-icons/di";
import {
  SiAxios,
  SiYarn,
  SiVite,
  SiFigma,
} from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandRedux } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="HTML">
        <AiFillHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="CSS">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node.js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Next.js">
        <TbBrandNextjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Redux">
        <TbBrandRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Bootstrap">
        <FaBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Axios">
        <SiAxios />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Yarn">
        <SiYarn />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Vite">
        <SiVite />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Responsive Design">
        <DiResponsive />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Figma">
        <SiFigma />
      </Col>
    </Row>
  );
}
 
export default Techstack;
