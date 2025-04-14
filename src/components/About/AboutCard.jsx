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
            Hello, I’m <b className="purple">Apoorv Verma</b> — a Full Stack
            Developer and Team Lead who writes code with precision and leads
            with purpose. Born in Patna and seasoned across cities, my career is
            a reflection of relentless curiosity and growth.
            <br />
            <br />
            After graduating in Electronics and Telecommunication Engineering in
            2020, I began my journey at First Advantage. But it was in 2022, at{" "}
            <b className="purple">FunctionUp</b>, where my developer journey
            truly took shape. I evolved from a frontend trainee to a Teaching
            Assistant, mentoring others and diving deep into ReactJS.
            <br />
            <br />
            My path led me to impactful collaborations with companies like{" "}
            <b className="purple">Snabbtech</b>, before taking on a leadership
            role at <b className="purple">Protech Business Consulting</b>. Here,
            I architect full-stack systems — building commercial-grade
            platforms, leading team sprints, managing role-based workflows, OTP
            auth flows, and even handling massive datasets of over 40 million
            records.
            <br />
            <br />
            Outside of work, I express through{" "}
            <b className="purple">blogging</b>, sharing thoughts on technology,
            mental health, and personal growth. You’ll often find me cruising on
            my Royal Enfield, enjoying the hum of the engine and the stillness
            of open roads. 🏍️
            <br />
            <br />
            Every day, I aim to balance tech, mentorship, and mindfulness —
            coding not just for systems, but for experiences that leave a mark.
            <br />
            <br />
            Let’s connect and build something meaningful — in code, in life, or
            on the next great road trip.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Mentoring Developers
            </li>
            <li className="about-activity">
              <ImPointRight /> Blogging about Tech & Growth
            </li>
            <li className="about-activity">
              <ImPointRight /> Riding through Nature Trails 🏍️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", textAlign: "right" }}>
            <strong className="purple">
              "Write code that speaks. Live a life that inspires."
            </strong>
          </p>
          <footer className="blockquote-footer" style={{ textAlign: "right" }}>
            <strong className="purple">Apoorv Verma</strong>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
