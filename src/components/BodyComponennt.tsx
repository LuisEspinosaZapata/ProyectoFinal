import React from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import { style } from '../theme/appTheme';

export const BodyComponennt = (props: any) => {
  // hook useWindowDimension: tamaño de la pantalla para aplicaciones mas adaptables
  const { height } = useWindowDimensions();
  return (
    <View 
      style={{ ...style.contentBody, 
      height: height * 0.88 
      }}>
      {props.children}
    </View>
  );
};
