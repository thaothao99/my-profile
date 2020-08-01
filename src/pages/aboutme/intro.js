import React from 'react'
import { Row, Col, Avatar } from 'antd'
import avt from './avt.jpg'

export default function Intro() {
  return (
    <div className="container intro-container">
      <h2>About Me</h2>
      <Row className="row-inf">
        <Col span={18} push={6} className="right">
          <h4><i>Objective</i></h4>
          <p>Looking for a challenging role in a reputable organization to utilize my technical, database, management skills for the growth of the organization as well as to enhance my knowledge and working.</p>
          <h4><i>Qualification</i></h4>
          <ul>
            <li>Experienced with Reactjs.</li>
            <li>Knowledge about NodeJS especially with framework like NestJS.</li>
            <li>Proficiency with HTML, CSS, JavaScript.</li>
            <li>Familar with UI frameworks such as Ant Design.</li>
            <li>Knowledge of modern authorization mechanisms (JSON WebToken).</li>
            <li>Experience with Babel, Webpack, NPM, Yarn.</li>
            <li>Good understanding of code versioning tools (Git).</li>
            <li>Knowing well about OOP, Data Structures, Algorithms.</li>
            <li>Basic knowledge of Levels Test in Sofware Testing. </li>
          </ul>
        </Col>
        <Col span={6} pull={18} className="left">
          <p><Avatar src={avt} size={200} shape="circle"></Avatar></p>
          <p><i>Nickname: </i>Bowny</p>
          <p><i>Birhday: </i>16/05/199</p>
        </Col>
      </Row>
    </div>
  )
}