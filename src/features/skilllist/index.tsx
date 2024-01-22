import Skill from 'shared/ui/skill';

import './index.scss';


const SkillList: React.FC<{skills : SkillProps[]}> = ({skills}) => {
  return (
    <div className="skills-list">
      {skills.map(skill => (
        <Skill img={skill.img} name={skill.name} key={skill.id}/>
      ))}
    </div>
  )
}

export default SkillList;