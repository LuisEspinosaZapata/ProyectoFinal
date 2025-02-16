import React from "react";
import { TextInput, View } from "react-native";
import { style } from '../theme/appTheme';
import { PRIMARY_COLOR } from "../commons/constants";
import Icon from "react-native-vector-icons/MaterialIcons";

//interface props
interface Props {
  placeholder: string;
  handleSetValues: (name: string, value: string) => void;
  name: string;
  isPassWord?: boolean; //propiedad opcional
  hasIcons?: boolean;
  accionIcon?:()=>void;
}
//
export const InputComponent = ({
  placeholder,
  handleSetValues,
  name,
  isPassWord = false,
  hasIcons = false,
  accionIcon
}: Props) => {
  return (
    <View>
      {(hasIcons)
      ?
      <Icon 
      name="visibility" 
      size={23} 
      onPress={accionIcon}
      style={style.iconPassword}
      color={PRIMARY_COLOR} />
    :
    null
    }

      <TextInput
        placeholder={placeholder}
        keyboardType="default"
        onChangeText={(value) => handleSetValues(name, value)}
        secureTextEntry={(isPassWord)}

        style={style.inputText}
      />
    </View>
  );
};
