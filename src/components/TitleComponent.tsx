import React from 'react';
import { Text, useWindowDimensions } from 'react-native';
import { style } from '../theme/appTheme';

//interface de Props
interface Props {
  title: string;
}

export const TitleComponent = ({ title }: Props) => {
  const { height } = useWindowDimensions();
  return (
    <Text style={{ ...style.globalTitle, height: height * 0.12 }}>{title}</Text>
  );
};
