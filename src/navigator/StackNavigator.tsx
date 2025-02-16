import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/LoginScreen";
import { PRIMARY_COLOR } from "../commons/constants";
import { RegisterScreen } from "../screens/RegisterScreen";
import { useState } from "react";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen";


//interface de arrego de usuarios para el incio de sesión
export interface User {
  id: number;
  email: string;
  password: string;
  nombres:string;
  apellidos:string;
  celular:number;
}

const Stack = createStackNavigator();

export const StackNavigator = () => {
  //arreglo de usurios para el inico de sesión
  const users: User[] = [
    { id: 1, email: "luis", password: "123456",nombres:"Luis Fernando",apellidos:"Espinosa Zapata",celular:984803681 },
    { id: 2, email: "carlos", password: "123456",nombres:"Carlos Josue",apellidos:"Espinosa ",celular:9848036789 },
    { id: 2, email: "isaac", password: "123456",nombres:"Isaac Ariel",apellidos:"Espinosa ",celular:234567890 },
  ];

  // hook useState: nos va a permitir la manipulacion de la lista con usuarios
  const [listUsers, setlistUsers] = useState(users);

  //funcion permite añadir nuevos usuarios al arreglo
  const handleAddUser=(user: User)=>{
    //añadir nuevos elementod en el serlis
    //operador ...propagacion nos permite crear una copia de arreglo
    setlistUsers([...listUsers, user]);
  }

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: PRIMARY_COLOR,
        },
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        children={()=> <LoginScreen users={listUsers}/>}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Register"
        children={()=><RegisterScreen users={listUsers} 
        handleAddUser={handleAddUser}/>}
      />
      <Stack.Screen 
       options={{ headerShown: false }}
       name='Home'
       component={HomeScreen}
       />
    </Stack.Navigator>
  );
};
