import React from 'react'
import Header from './header'
import './aboutme.scss'
import Intro from './intro'
import Education from './education'
import SkillAndMore from './skill'
import Experience from './experience'
export default function AboutMe() {
  return (
    <div className="aboutme">
      <Header></Header>
      <Intro></Intro>
      <Experience></Experience>
      <Education></Education>
      <SkillAndMore></SkillAndMore>
    </div>
  )
}