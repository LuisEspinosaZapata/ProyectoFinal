import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { style } from '../theme/appTheme'

//interface props

interface Props{
  textButton:string;
  onPress:()=>void;
}

export const ButtonComponent = ({textButton,onPress}:Props) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    style={style.button}>
        <Text style={style.buttonText}>{textButton}</Text>
    </TouchableOpacity>
  )
}
