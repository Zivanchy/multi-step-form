import { BorderStyle, ColorTypes } from 'src/constants/BaseTypes';
import {
  AlignItemsTypes,
  FlexDirectionTypes,
  JustifyContentTypes,
} from 'src/constants/FlexTypes';

export const createBorder = (
  borderStyle: BorderStyle,
  borderColor: ColorTypes
) => {
  return `border border-${borderStyle} border-${borderColor}`;
};

export const createPadding = (size: number) => {
  return `p-[${size}px]`;
};

export const createMargin = (size: number) => {
  return `m-[${size}px]`;
};

export const createFlexBox = (
  flexDirection: FlexDirectionTypes = 'row',
  justifyContent: JustifyContentTypes = 'start',
  alignItems: AlignItemsTypes = 'start'
) => {
  return `flex flex-${flexDirection} justify-${justifyContent} items-${alignItems}`;
};
