import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <br />
            Hello, I'm Apoorv Verma—a dynamic individual with a passion for
            technology, gaming, and writing. Originally from Patna, I relocated
            to Bangalore in 2020 to pursue my professional goals.
            <br />
            <br />
            My academic journey started at Doon International School in
            Dehradun, where discipline and character were instilled in me. I
            later completed a Bachelor's in Electronics and Telecommunication in
            2020, expanding my knowledge in technology. Following my graduation,
            I secured a campus placement at First Advantage and worked there as
            an Operational Analyst until December 2022.
            <br />
            <br />
            In January 2023, I joined Function Up, a bootcamp focused on honing
            development skills, to embark on my front-end developer career as a
            trainee. Due to my excellent performance, I was promoted to the role
            of Teaching Assistant, where I conducted live doubt classes and
            mentored junior trainees on various ReactJS projects.
            <br />
            <br />
            I'm also a dedicated blogger, sharing insights on
            mental health, time management, and personal growth.
            Outside work, I enjoy road trips on my trusty bullet, appreciating
            the beauty of the world.
            <br />
            <br />
            I thrive on challenges and continuous learning, bringing a unique
            blend of skills to any team or project. I'm excited to contribute to
            technology and more, embracing innovation and growth.
            <br />
            <br />
            Thank you for considering me, Apoorv Verma, for your esteemed
            ventures. Let's embark on a journey of innovation and growth
            together.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", textAlign: "right" }}>
            "Seek What Sets Your Soul On Fire !"
          </p>
          <footer className="blockquote-footer" style={{ textAlign: "right" }}>
            Apoorv
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
