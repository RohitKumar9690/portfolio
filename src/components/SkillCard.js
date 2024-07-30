import React from 'react'
import "./SkillCardStyle.css";
import { CgCPlusPlus } from "react-icons/cg";
import {DiGit} from "react-icons/di";
import {SiVisualstudiocode, SiReact, SiReactrouter, SiBootstrap,SiPhp , SiAngular, SiPython,SiMysql, SiMongodb} from "react-icons/si";
import {TbBrandCss3, TbBrandJavascript, TbBrandHtml5} from "react-icons/tb";
import {IoLogoWindows, IoLogoNpm} from "react-icons/io"

export default function SkillCard({id}) {
  return (
    <>
        <div className="skill-container" id = {id}>
          <div className="skill-header">My Skills</div>
          <div className="skill-box">
            <h2>Languages</h2>
            <div className="skillset">
      <abbr title='C++'><CgCPlusPlus className='techLogo'/></abbr>
      <abbr title='HTML 5'><TbBrandHtml5 className='techLogo'/></abbr>
      <abbr title='JavaScript'><TbBrandJavascript className='techLogo'/></abbr>
      <abbr title='PHP'><SiPhp className='techLogo'/></abbr>
      <abbr title='Python'><SiPython className='techLogo'/></abbr>
     
    </div>         
          </div>
          <div className="skill-box">
            <h2>Libraries and Frameworks</h2>
            <div className="skillset">
              <abbr title='ReactJS'><SiReact className='techLogo'/></abbr>
              <abbr title='Angular'><SiAngular className='techLogo'/></abbr>
              <abbr title='CSS 3'><TbBrandCss3 className='techLogo'/></abbr>
              <abbr title='Git/Github'><DiGit className='techLogo'/></abbr>
              <abbr title='NPM'><IoLogoNpm className='techLogo'/></abbr>
              <abbr title='Bootstrap'><SiBootstrap className='techLogo'/></abbr>
              <abbr title='React Router'><SiReactrouter className='techLogo'/></abbr>
            </div>            
          </div>
          <div className="skill-box">
            <h2>Database Technologies</h2>
            <div className="skillset">
            <abbr title='MySQL'><SiMysql className='techLogo'/></abbr>
        <abbr title='MongoDB'><SiMongodb className='techLogo'/></abbr>
            </div>            
          </div>
          <div className="skill-box">
            <h2>Tools & Systems</h2>
            <div className="skillset">
              <abbr title='Visual Studio Code'><SiVisualstudiocode className='techLogo'/></abbr>
              <abbr title='Windows'><IoLogoWindows className='techLogo'/></abbr>
            </div>            
          </div>
        </div>
    </>

  )
}
