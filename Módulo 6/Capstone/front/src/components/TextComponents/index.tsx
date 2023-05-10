import { Text, TextProps } from "@chakra-ui/react";

import { FontSizes } from "../../styles/fontSizes";

export const TextH1 = ({ children, fontWeight, color }: TextProps) => {
  return (
    <Text fontSize={FontSizes.heading1} fontWeight={fontWeight} color={color}>
      {children}
    </Text>
  );
};

export const TextH2 = ({ children, fontWeight, color }: TextProps) => {
  return (
    <Text fontSize={FontSizes.heading2} fontWeight={fontWeight} color={color}>
      {children}
    </Text>
  );
};

export const TextH3 = ({ children, fontWeight, color }: TextProps) => {
  return (
    <Text fontSize={FontSizes.heading3} fontWeight={fontWeight} color={color}>
      {children}
    </Text>
  );
};

export const TextH4 = ({ children, fontWeight, color }: TextProps) => {
  return (
    <Text fontSize={FontSizes.heading4} fontWeight={fontWeight} color={color}>
      {children}
    </Text>
  );
};

export const TextH5 = (props: TextProps) => {
  return (
    <Text
      fontSize={FontSizes.heading5}
      fontWeight={props.fontWeight}
      color={props.color}
      {...props}
    >
      {props.children}
    </Text>
  );
};

export const TextH6 = ({ children, fontWeight, color }: TextProps) => {
  return (
    <Text fontSize={FontSizes.heading6} fontWeight={fontWeight} color={color}>
      {children}
    </Text>
  );
};

export const TextH7 = ({ children, fontWeight, color }: TextProps) => {
  return (
    <Text fontSize={FontSizes.heading7} fontWeight={fontWeight} color={color}>
      {children}
    </Text>
  );
};

export const TextB1 = ({ children, fontWeight, color }: TextProps) => {
  return (
    <Text fontSize={FontSizes.body2} fontWeight={fontWeight} color={color}>
      {children}
    </Text>
  );
};

export const TextB2 = ({ children, fontWeight, color }: TextProps) => {
  return (
    <Text fontSize={FontSizes.body2} fontWeight={fontWeight} color={color}>
      {children}
    </Text>
  );
};

export const TextBBT = ({ children, fontWeight, color }: TextProps) => {
  return (
    <Text
      fontSize={FontSizes.buttonBigText}
      fontWeight={fontWeight}
      color={color}
    >
      {children}
    </Text>
  );
};

export const TextBMT = ({ children, fontWeight, color }: TextProps) => {
  return (
    <Text
      fontSize={FontSizes.buttonMediumText}
      fontWeight={fontWeight}
      color={color}
    >
      {children}
    </Text>
  );
};

export const TextIPH = ({ children, fontWeight, color }: TextProps) => {
  return (
    <Text
      fontSize={FontSizes.inputPlaceholder}
      fontWeight={fontWeight}
      color={color}
    >
      {children}
    </Text>
  );
};

export const TextIL = ({ children, fontWeight, color }: TextProps) => {
  return (
    <Text fontSize={FontSizes.inputLabel} fontWeight={fontWeight} color={color}>
      {children}
    </Text>
  );
};
