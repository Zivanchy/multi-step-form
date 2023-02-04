import { ColorTypes, FontSize } from 'src/constants/BaseTypes';

interface Props {
  text: string;
  color: ColorTypes;
  fontSize: FontSize;
  uppercase?: boolean;
}

const Text = ({ color, text, uppercase, fontSize }: Props) => {
  const textColor = `text-${color}`;
  const textSize = `text-${fontSize}`;
  const isUppercase = uppercase ? 'uppercase' : '';

  const className = `${textSize} ${textColor} ${isUppercase}`;

  return <p className={className}>{text}</p>;
};

export default Text;
