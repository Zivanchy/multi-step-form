import { ReactNode } from 'react';
import { ColorTypes } from 'src/constants/BaseTypes';

interface Props {
  formNumberStep?: number;
  backgroundFill?: boolean;
  icon?: ReactNode;
  borderColor?: ColorTypes;
  padding?: number;
}

const RoundIcon = ({
  formNumberStep,
  backgroundFill,
  icon,
  borderColor,
  padding,
}: Props) => {
  const className = `border border-${borderColor} ${
    padding && `p-[${padding}px]`
  } rounded-full p-6 ${backgroundFill && `bg-${backgroundFill}`}`;

  return <div className={className}>{formNumberStep || icon}</div>;
};

export default RoundIcon;
