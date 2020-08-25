import React from "react";
import { Row, Col } from "antd";

export default function Education() {
  return (
    <div className="container edu-container">
      <h2>Education</h2>
      <Row className="my-edu">
        <Col span={18} push={6} className="right">
          <h4>
            <i>Activities</i>
          </h4>
          <ul>
            <li>Communicated for Volunteer Spring Campaign 2018.</li>
            <li>Supported for Green Summer Campaign 2018.</li>
            <li>
              Organizer of Volunteer Campaign at Mid-Autumn Festival 2017.
            </li>
            <li>
              Member of communication team for BONJOUR UIT - Welcome New Joiner
              2018.
            </li>
          </ul>
        </Col>
        <Col span={6} pull={18} className="left">
          <div>
            <h4>
              <i>University of Information Technology VNU-HCM</i>
            </h4>
            <p>July 2019 – Present</p>
            <p>
              <i>Major: </i>Information System
            </p>
            <p>
              <i>GPA: </i>7.19
            </p>
          </div>
        </Col>
      </Row>
      <Row className="my-edu">
        <Col span={18} push={6} className="right">
          <h4>
            <i>Skills</i>
          </h4>
          <ul>
            <li>Speak English fluently and listen well to English.</li>
            <li>Able to research English Documents.</li>
          </ul>
        </Col>
        <Col span={6} pull={18} className="left">
          <div>
            <h4>
              <i>Language - English</i>
            </h4>
            <p>
              <i>Toeic: </i>690
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
