import { useState } from "react";

import {cssLogo, gitLogo, htmlLogo, jsLogo, reactLogo, sassLogo, svelteLogo} from './static';

import SkillList from "features/skilllist";
import ThemeScwitcer from "shared/ui/ThemeSwitcher";

import './index.scss';
import Button from "shared/ui/button";

const Intro = () => {
  const [skills] = useState([
    {id: 1, name: 'HTML', img: htmlLogo},
    {id: 2, name: 'CSS', img: cssLogo},
    {id: 3, name: 'SASS', img: sassLogo},
    {id: 4, name: 'JS', img: jsLogo},
    {id: 5, name: 'GIT', img: gitLogo},
    {id: 6, name: 'REACT', img: reactLogo},
    {id: 7, name: 'SVELTE', img: svelteLogo},
  ]);

  return (
    <div className="intro">
      <div className="copyright">
        <ThemeScwitcer/>
        <p className="copyright-title">Personal portfolio</p>
      </div>
      <div className="greeting">
        <h1 className="title">Hi, I'm Mark</h1>
        <p className="sub-title">I'm a Front End Developer from Ukraine.</p>
        <div className="actions">
          <Button href="https://github.com/MarkElan1" className="contact" target="_blank">GitHub</Button>
          <Button href="https://t.me/maybe_just_mark" className="contact" target="_blank">Contact Me Telegram</Button>
        </div>
      </div>
      <div className="skills">
          <h3 className="title">Skills <span className="sub-title">or technologies what I usually use</span></h3>
          <SkillList skills={skills}/>
        </div>
    </div>
  )
}

export default Intro;