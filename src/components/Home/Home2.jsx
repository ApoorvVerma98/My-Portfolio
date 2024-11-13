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
              Hello there! 👋 I'm Apoorv, a passionate and driven Front-end
              Developer with a deep love for creating seamless and intuitive web
              applications. <br /> <br /> My journey in the tech world started
              with a simple curiosity about how websites work. Since then, I’ve
              immersed myself in continuous learning and development. 🚀
              <br />
              <br />I have a strong foundation in{" "}
              <i>
                <b className="purple">
                  HTML, CSS, JavaScript, React.js, and TypeScript
                </b>
              </i>
              , and I’m constantly honing my skills with the latest technologies
              and trends. 💻
              <br />
              <br />I specialize in building{" "}
              <i>
                <b className="purple">responsive designs</b> that look great on
                any device, <b className="purple">UX/UI design</b> for
                user-friendly interfaces, and utilizing{" "}
                <b className="purple">CSS frameworks</b> like{" "}
                <b className="purple">Bootstrap and Material UI</b> to create
                visually appealing and efficient layouts. <br />
                I'm also experienced with{" "}
                <i>
                  <b className="purple">
                    performance optimization, web accessibility, testing, and
                    debugging
                  </b>
                </i>
                . 🛠️
              </i>
              <br />
              <br />
              I’m passionate about crafting accessible, high-performance
              websites that offer a seamless user experience. A well-designed
              website can make a lasting impression, and I strive to deliver
              websites that are not only functional but also delightful to use.
              🌟
              <br />
              <br />
              When I’m not building awesome front-end features, I dive into web
              applications using{" "}
              <i>
                <b className="purple">Next.js</b>
              </i>
              , exploring the potential of advanced JavaScript libraries and
              frameworks for building highly interactive and modern web
              applications. 🚀
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
