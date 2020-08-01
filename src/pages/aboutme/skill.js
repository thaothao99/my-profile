import React from 'react'
import { Row, Col } from 'antd'

export default function SkillAndMore() {
  return (
    <div className="container skill-container">
      <h2>A Little More About Me</h2>
      <Row className="my-edu">
        <Col span={18} push={6} className="right">
          <h4><i>Soft skills</i></h4>
          <ul>
            <li>Confidence and eager to learn.</li>
            <li>Speaking in public and organizing activities.</li>
            <li>Work in partnership with experts and agencies.</li>
            <li>Approaching with professional enterprise environment to improve knowledge.</li>
          </ul>
        </Col>
        <Col span={6} pull={18} className="left">
          <div>
            <h4><i>Interest</i></h4>
            <p>Photography, Traveling, Volunteer, Reading, Listening, Dacing...</p>
          </div>
        </Col>
      </Row>
    </div>
  )
}