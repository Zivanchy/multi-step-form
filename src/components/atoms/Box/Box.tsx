import { ReactNode } from 'react';
import { BorderStyle, ColorTypes, DisplayType } from 'src/constants/BaseTypes';
import {
  AlignItemsTypes,
  FlexDirectionTypes,
  JustifyContentTypes,
} from 'src/constants/FlexTypes';
import { createClassName } from 'src/helpers/className';
import {
  createBorder,
  createFlexBox,
  createMargin,
  createPadding,
} from 'src/helpers/createStyling';

interface Props {
  children: ReactNode;
  borderColor?: ColorTypes;
  borderStyle?: BorderStyle;
  padding?: number; // in px
  margin?: number; // in px
  flexDirection?: FlexDirectionTypes;
  justifyContent?: JustifyContentTypes;
  alignItems?: AlignItemsTypes;
  className?: string;
}

const Box = ({
  children,
  borderColor,
  borderStyle,
  padding,
  margin,
  flexDirection,
  justifyContent,
  alignItems,
  className,
}: Props) => {
  const Border =
    borderStyle && borderColor && createBorder(borderStyle, borderColor);
  const Padding = padding && createPadding(padding);
  const Margin = margin && createMargin(margin);
  const Flex =
    (justifyContent || alignItems || flexDirection) &&
    createFlexBox(flexDirection, justifyContent, alignItems);

  const styles = createClassName([Border, Padding, Margin, Flex, className]);

  return <div className={styles}>{children}</div>;
};

export default Box;
