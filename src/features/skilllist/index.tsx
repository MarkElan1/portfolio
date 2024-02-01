import './index.scss';

import { FC } from 'react';
import Skill from 'shared/ui/skill';

const SkillList: FC<{ skills: SkillProps[] }> = ({ skills }) => {
  return (
    <div className="skills-list">
      {skills.map((skill) => (
        <Skill img={skill.img} name={skill.name} key={skill.id} />
      ))}
    </div>
  );
};

export default SkillList;
