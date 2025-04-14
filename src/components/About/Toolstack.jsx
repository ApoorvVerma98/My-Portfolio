import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiNetlify,
  SiVercel,
  SiMacos,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiHeroku,
  SiWindows,
  SiAmazonaws,
  SiFigma,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="MacOS">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Windows">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="VS Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GitHub">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GitLab">
        <SiGitlab />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Figma">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Docker">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="AWS (S3, Textract)">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Netlify">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Vercel">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Heroku">
        <SiHeroku />
      </Col>
    </Row>
  );
}

export default Toolstack;
