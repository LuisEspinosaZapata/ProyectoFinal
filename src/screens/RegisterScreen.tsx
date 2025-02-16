import React, { useState } from "react";
import { Alert, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { PRIMARY_COLOR } from "../commons/constants";
import { TitleComponent } from "../components/TitleComponent";
import { BodyComponennt } from "../components/BodyComponennt";
import { style } from "../theme/appTheme";
import { InputComponent } from "../components/InputComponent";
import { ButtonComponent } from "../components/ButtonComponent";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { User } from "../navigator/StackNavigator";
import Icon from "react-native-vector-icons/MaterialIcons";

//interface Props
interface Props {
  users: User[]; //arreglo  con la lista de usuarios
  handleAddUser: (user: User) => void; //funcion para agregar usuario al arreglo
}

//ibterface - formulario del registro
interface FormRegister {
  email: string;
  password: string;
  nombres: string;
  apellidos: string;
  celular: number;
}

export const RegisterScreen = ({ users, handleAddUser }: Props) => {
  //nook useState:Manipula el estago del fotmular
  const [fromRegister, setFromRegister] = useState<FormRegister>({
    email: "",
    password: "",
    nombres: "",
    apellidos: "",
    celular: 0,
  });

  //funcion actualizar el estado del formulario
  const handleSetValues = (name: string, value: string) => {
    setFromRegister({ ...fromRegister, [name]: value });
  };

  //hook useState: para visualizar la contraseña o no del password
  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

  //hook useNavigation: permite navegar de una pantalla a otra
  const navigation = useNavigation();

  //funcion registrar nuevos usrioaro
  const handleSingUp = () => {
    //validar los campos del formulario no esten vacios
    if (!fromRegister.email || !fromRegister.password) {
      //mensaje de eviso
      Alert.alert("Error", "Ingrese los valores en todos los campos");
      return;
    }
    //validando que el usuairo no se encuentre registrado
    if (verifyUser() != null) {
      //mensaje de eviso
      Alert.alert("Error", "EL correo ya se encunetra resgistrado");
      return;
    }
    //genera la información del nuevo usuario (objeto User)
    //arreglo con los ids del usuario
    const getIdUsers = users.map((user) => user.id); //[1,2]
    //generar el Id para el nuevo usuario
    const getNewId = Math.max(...getIdUsers) + 1;
    //crear el nuevo usuario -nuevo objeto usuario
    const newUser: User = {
      id: getNewId,
      email: fromRegister.email,
      password: fromRegister.password,
      nombres: fromRegister.nombres,
      apellidos: fromRegister.apellidos,
      celular: fromRegister.celular,
    };
    //agregando el nuevo usuario al arreglo
    handleAddUser(newUser);
    Alert.alert("Feliciraciones", "Registo exitoso!!!!");
    navigation.goBack();
    //console.log(fromRegister);
  };

  //funcion para validar que el usuiario no este registrado
  const verifyUser = () => {
    const existUser = users.filter(
      (user) => user.email === fromRegister.email
    )[0];
    return existUser; //user | null
  };

  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponent title="Registrate" />
      <BodyComponennt>
        <View>
          <Text style={style.titleBody}>Estas a un clip!!</Text>
          <Text style={style.descriptionBody}>
            De disfrutar los mejores Cocteles del mundo mundial
          </Text>
        </View>

        <View style={style.contentInputs}>
          <InputComponent
            placeholder="Nombre"
            handleSetValues={handleSetValues}
            name={"nombres"}
          />

          <InputComponent
            placeholder="Apellidos"
            handleSetValues={handleSetValues}
            name={"apellidos"}
          />

          <InputComponent
            placeholder="Ingrese su número de celualr sin 0 al inicio"
            handleSetValues={handleSetValues}
            name={"celular"}
          />

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
        <ButtonComponent textButton="Registrar" onPress={handleSingUp} />
        <TouchableOpacity
          onPress={() =>
            navigation.dispatch(CommonActions.navigate({ name: "Login" }))
          }
        >
          <Text style={style.textRedirrection}>
            Ya tienes una cuenta? Iniciar sesión ahora
          </Text>
        </TouchableOpacity>
        <View style={style.logoCenter}>
          <Icon name="wine-bar" size={100} color={PRIMARY_COLOR} />
        </View>
      </BodyComponennt>
    </View>
  );
};
