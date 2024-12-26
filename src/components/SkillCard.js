import React from 'react';
import './SkillCardStyle.css';
import { CgCPlusPlus } from "react-icons/cg";
import { DiGit } from "react-icons/di";
import { SiVisualstudiocode, SiReact, SiReactrouter, SiBootstrap, SiPhp, SiAngular, SiPython, SiMysql, SiMongodb, SiNodedotjs, SiRedux, SiTailwindcss, SiOracle} from "react-icons/si";
import { TbBrandCss3, TbBrandJavascript, TbBrandHtml5, TbBrandReactNative } from "react-icons/tb";
import { IoLogoWindows, IoLogoNpm } from "react-icons/io";
import { FaJava } from 'react-icons/fa';

export default function SkillCard({ id }) {
  return (
    <div className="skill-container" id={id}>
      <div className="skill-header">My Skills</div>
      
      {/* Languages Section */}
      <div className="skill-box">
        <h2>Languages</h2>
        <div className="skillset">
          <abbr title="C++"><CgCPlusPlus className='techLogo' /></abbr>
          <abbr title="HTML 5"><TbBrandHtml5 className='techLogo' /></abbr>
          <abbr title="JavaScript"><TbBrandJavascript className='techLogo' /></abbr>
          <abbr title="PHP"><SiPhp className='techLogo' /></abbr>
          <abbr title="Python"><SiPython className='techLogo' /></abbr>
          <abbr title="Java"><FaJava className='techLogo' /></abbr>
        </div>
      </div>

      {/* Libraries and Frameworks Section */}
      <div className="skill-box">
        <h2>Libraries and Frameworks</h2>
        <div className="skillset">
          <abbr title="ReactJS"><SiReact className='techLogo' /></abbr>
          <abbr title="NodeJS"><SiNodedotjs className='techLogo' /></abbr>
          <abbr title="Redux-Toolkit"><SiRedux className='techLogo' /></abbr>
          <abbr title="Angular"><SiAngular className='techLogo' /></abbr>
          <abbr title="CSS 3"><TbBrandCss3 className='techLogo' /></abbr>
          <abbr title="Git/Github"><DiGit className='techLogo' /></abbr>
          <abbr title="NPM"><IoLogoNpm className='techLogo' /></abbr>
          <abbr title="Bootstrap"><SiBootstrap className='techLogo' /></abbr>
          <abbr title="React Router"><SiReactrouter className='techLogo' /></abbr>
          <abbr title='Tailwind CSS'><SiTailwindcss className='techLogo' /></abbr>
          <abbr title='React Native'><TbBrandReactNative  className='techLogo' /></abbr>
        </div>
      </div>

      {/* Database Technologies Section */}
      <div className="skill-box">
        <h2>Database Technologies</h2>
        <div className="skillset">
          <abbr title="MySQL"><SiMysql className='techLogo' /></abbr>
          <abbr title="Oracle"><SiOracle className='techLogo' /></abbr>
          <abbr title="MongoDB"><SiMongodb className='techLogo' /></abbr>
        </div>
      </div>

      {/* Tools & Systems Section */}
      <div className="skill-box">
        <h2>Tools & Systems</h2>
        <div className="skillset">
          <abbr title="VS Code"><SiVisualstudiocode className='techLogo' /></abbr>
          <abbr title="Windows"><IoLogoWindows className='techLogo' /></abbr>
        </div>
      </div>
    </div>
  );
}
