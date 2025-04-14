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
  SiVite,
  SiFigma,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiPython,
  SiFlask,
  SiJsonwebtokens,
} from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
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
      <Col xs={4} md={2} className="tech-icons" title="TypeScript">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React.js">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Redux Toolkit">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node.js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Express.js">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JWT Auth">
        <SiJsonwebtokens />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Next.js">
        <TbBrandNextjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Tailwind CSS">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Bootstrap">
        <FaBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Axios">
        <SiAxios />
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
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Flask">
        <SiFlask />
      </Col>
    </Row>
  );
}

export default Techstack;
