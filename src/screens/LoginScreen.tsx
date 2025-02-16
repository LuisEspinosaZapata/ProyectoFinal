import {
  Alert,
  StatusBar,
  Text,
  TextComponent,
  TouchableOpacity,
  View,
} from "react-native";
import { TitleComponent } from "../components/TitleComponent";
import { PRIMARY_COLOR, SECUNDARY_COLOR } from "../commons/constants";
import { BodyComponennt } from "../components/BodyComponennt";
import { style } from "../theme/appTheme";
import { InputComponent } from "../components/InputComponent";
import { ButtonComponent } from "../components/ButtonComponent";
import { useState } from "react";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { User } from "../navigator/StackNavigator";
import Icon from "react-native-vector-icons/MaterialIcons";

//interface que contenga los datos de l surio
interface Props {
  users: User[]; //arreglo con la lista de usuarios
}

//interfas  formulairo login
interface FormLogin {
  email: string;
  password: string;
}

export const LoginScreen = ({ users }: Props) => {
  //hook useStateSniper  desde riat: cambSta eSniper  desde riatl estado del formulario
  const [formLogin, setFormLogin] = useState<FormLogin>({
    email: "",
    password: "",
  });

  //hook useState: para visualizar la contraseña o no del password
  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

  //hook useNavegation
  const navigation = useNavigation();

  //funcion actualizar el estado del formulario
  //como buena practica cuando una contante va a trabajar en el mismo entorno poner al inicio handle+el mobre
  const handleSetValues = (name: string, value: string) => {
    setFormLogin({ ...formLogin, [name]: value });
  };

  //funcion para inicar sesión
  const handleSingIn = () => {
    //validar que todos los campos esten completos
    if (formLogin.email === "" || formLogin.password === "") {
      //mensaje de eviso
      Alert.alert("Error", "Ingrese los valores en todos los campos");
      return;
    }
    //validar que el usuario si exista (usuario regustrado)
    if (!verifyUser()) {
      Alert.alert("Error", "Correo y/o contraseña incorrectas");
      return;
    }
    //si incio sesión correctamete ir al hme xreen
    navigation.dispatch(CommonActions.navigate({ name: "Home" }));

    //console.log(formLogin);
  };

  //funcion va a permitir si el usuario está registrado en el arreglo
  const verifyUser = () => {
    const existUser = users.filter(
      (user) =>
        user.email === formLogin.email && user.password === formLogin.password
    )[0];
    return existUser; // usuario || null
  };

  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponent title="Iniciar Sesión" />
      <BodyComponennt>
        <View>
          <Text style={style.titleBody}>BIenvenido de nuevo!!</Text>
          <Text style={style.descriptionBody}>
            Realiaza tus compras de manera rápidas y seguras
          </Text>
        </View>
        <View style={style.contentInputs}>
          <InputComponent
            placeholder="Correo"
            handleSetValues={handleSetValues}
            name={"email"}
          />
          <InputComponent
            placeholder="Contraseña"
            handleSetValues={handleSetValues}
            name={"password"}
            isPassWord={hiddenPassword}
            hasIcons={true}
            accionIcon={() => setHiddenPassword(!hiddenPassword)}
          />
        </View>
        <ButtonComponent textButton="Iniciar" onPress={handleSingIn} />
        <TouchableOpacity
          onPress={() =>
            navigation.dispatch(CommonActions.navigate({ name: "Register" }))
          }
        >
          <Text style={style.textRedirrection}>
            No tienes una cuenta? Regístrate ahora
          </Text>
        </TouchableOpacity>
        <View style={style.logoCenter}>
          <Icon 
          name="wine-bar" 
          size={100} 
          color={PRIMARY_COLOR} />
        </View>
      </BodyComponennt>
    </View>
  );
};
