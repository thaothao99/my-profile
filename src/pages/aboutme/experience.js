import React from 'react'
import { Row, Col } from 'antd'

export default function Experience() {

  return (
    <div className="container exp-container">
      <h2>Experience</h2>
      <Row className="my-exp">
        <Col span={18} push={6} className="right">
          <h4><i>Position</i></h4>
          <p>Front-end Developer (Part-time)</p>
          <h4><i>Duties and responsibilities</i></h4>
          <ul>
            <li>Developing new user-facing features using ReactJS</li>
            <li>Building reusable components and front-end libraries for future use.</li>
            <li>Develops, and relaunches responsive the company websites.</li>
            <li>Translating designs and wireframes into high quality code.</li>
            <li>Do Unit Testing with Jest and Integration Test with Cypress.</li>
          </ul>
        </Col>
        <Col span={6} pull={18} className="left">
          <div>
            <h4><i>ACEXIS JSC</i></h4>
            <p>July 2019 – March 2020</p>
            <a href="https://acexis.com/">acexis.com</a>
          </div>
        </Col>
      </Row>
      <Row className="my-exp">
        <Col span={18} push={6} className="right">
          <h4><i>Position</i></h4>
          <p>Developer, BA</p>
          <h4><i>Duties and responsibilities</i></h4>
          <ul>
            <li> Research and development with NestJS, MongoDB, ReactJS, MobX…</li>
            <li>Build RESTful API and GraphQL.</li>
            <li>Identifying web-based user interactions</li>
            <li>Reviewing application requirements and interface designs.</li>
          </ul>
        </Col>
        <Col span={6} pull={18} className="left">
          <div>
            <h4><i>The School Project – Pet Store</i></h4>
            <p>March 2019 – May 219</p>
            <a href="https://github.com/thaothao99/fe-pet-store">github.com/thaothao99/fe-pet-store</a>
          </div>
        </Col>
      </Row>

    </div>
  )
}