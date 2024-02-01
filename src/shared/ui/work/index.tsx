import './index.scss';

import { FC } from 'react';

import Button from '../button';
import { mobileIcon, pcIcon } from './static';

interface WorkProps {
  title: string;
}

const Work: FC<WorkProps> = ({ title }) => {
  return (
    <div className="work">
      <div className="head">
        <h2 className="title">{title}</h2>
      </div>
      <div className="actions">
        <Button href="#" className="work">
          See Demo
        </Button>
        <Button href="#" className="work">
          Source
        </Button>
      </div>
      <div className="versions">
        <span className="text">For devices:</span>
        <div className="icons">
          <img className="icon" src={mobileIcon} alt="" />
          <img className="icon" src={pcIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Work;
