import './index.scss'

const Skill: React.FC<SkillProps> = ({img, name}) => {
  return (
    <div className="skill">
        <img className="image" src={img} alt="" />
        <h4 className="skill-title">{name}</h4>
    </div>
  )
}

export default Skill;