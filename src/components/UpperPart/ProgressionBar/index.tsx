import * as React from 'react';

import './ProgressionBar.scss';

interface Props {
  completion: number;
}

const ProgressionBar = ({ completion }: Props) => {
  const fillerStyle = {
    width: `${completion}%`,
  };

  return (
    <div className="ProgressionBar">
      <div className="ProgressionBar__colored-filler" style={fillerStyle}></div>
      <span className="ProgressionBar__label">{`${completion}% Completed`}</span>
    </div>
  );
};

export default ProgressionBar;
