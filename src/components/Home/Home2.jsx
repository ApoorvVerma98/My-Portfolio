import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello there! 👋 I'm Apoorv Verma — a Full Stack Developer & Team
              Lead with over 4 years of experience building scalable,
              production-grade web applications. I specialize in crafting
              elegant UIs, managing complex data flows, and leading
              high-performing dev teams. <br />
              <br />
              My journey began with a simple curiosity about how websites
              worked. Today, I build{" "}
              <b className="purple">
                secure, responsive, and performance-optimized platforms
              </b>{" "}
              using modern tools like{" "}
              <b className="purple">
                React, TypeScript, Redux Toolkit, Node.js, MongoDB, and
                TailwindCSS
              </b>
              . 💻🚀
              <br />
              <br />
              I’m passionate about{" "}
              <i>
                <b className="purple">
                  clean architecture, role-based access control (RBAC), JWT
                  auth, and scalable REST APIs
                </b>
              </i>
              . From frontend finesse to backend robustness, I take pride in
              shipping features that are both intuitive and bulletproof.
              <br />
              <br />
              At Protech Business Consulting, I lead the development of
              enterprise dashboards, onboarding flows, and intelligent search
              systems built to handle millions of records. I’ve also worked on
              asset management tools, barcode systems, and multilingual support
              — all optimized for performance and accessibility. 🔒📊🌐
              <br />
              <br />
              When I’m not coding or leading teams, you’ll find me blogging
              about tech, mentoring juniors, or riding my Bullet through scenic
              trails — because innovation isn’t just in code, it’s a way of
              life. 🛣️✍️
              <br />
              <br />
              I’m currently exploring{" "}
              <b className="purple">AI integrations using Python & Flask</b> to
              bring even more power and intelligence to the products I build.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON 🌐</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me on
              social media or drop me a message! 💬
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ApoorvVerma98"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub size={30} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/OhSoStoned_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter size={30} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/apoorvverma-sde/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn size={30} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/oh_so_stoned/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram size={30} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
