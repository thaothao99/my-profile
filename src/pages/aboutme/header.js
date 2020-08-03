import React from 'react'
import { Row, Col } from 'antd';
import { GithubOutlined, SkypeOutlined, FacebookOutlined, LinkedinOutlined } from '@ant-design/icons';
import './header.scss'

export default function Header() {

  return (
    <div className="container container-header">
      <Row>
        <Col className="left" span={12}>
          <div>
            <h1>Tran Ba Thao</h1>
            <h3>Front-end Development Fresher</h3>
          </div>
        </Col>
        <Col className="right" span={12}>
          <div className="inf-contain">
            <ul className="icons-contact">
              <li>
                <a href="https://github.com/thaothao99">
                  <GithubOutlined style={{ fontSize: '30px' }} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/tthaotrann">
                  <FacebookOutlined style={{ fontSize: '30px' }} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/tran-thao-6236761b2/">
                  <LinkedinOutlined style={{fontSize:'30px'}}></LinkedinOutlined>
                </a>
              </li>
              <li>
                <a href="tel:0986109873">
                  <SkypeOutlined style={{ fontSize: '30px' }} />
                </a>
              </li>
            </ul>
            <div className="contact">
              <p>Phone: <a href="tel:0986109873"><b>0986109873</b></a></p>
              <p>Email: <a href='mailto:thao160599@gmail.com'><b>thao160599@gmail.com</b></a> </p>
              <p>Address: <b>Thu Duc District, HCM City</b></p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}