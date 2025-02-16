import React from "react";
import { FlatList, Modal, Text, useWindowDimensions, View } from "react-native";
import { Car } from "./HomeScreen";
import { style } from "../../theme/appTheme";
import { PRIMARY_COLOR } from "../../commons/constants";
import Icon from "react-native-vector-icons/MaterialIcons";
//interface props
interface Props {
  isVisible: boolean;
  setShowModal: () => void;
  car: Car[]; //arreglo de los productos en el carrito
}
export const ModalCar = ({ isVisible, setShowModal, car }: Props) => {
  //hook useWindowsDimension: tomar el tamaño de la pantalla
  const { width } = useWindowDimensions();

  //funcion para calcular el totol
  const totalPay = () => {
    let total = 0;
    car.forEach((item) => {
      total += item.price * item.totalQuantity;
    });
    return total;
  };
  return (
    <Modal visible={isVisible} animationType="fade" transparent={true}>
      <View style={style.contentPrincipal}>
        <View
          style={{
            ...style.contentModal,
            width: width * 0.8,
          }}
        >
          <View style={style.headerModal}>
            <Text style={style.titleModal}>Mis Cocteles</Text>
            <View style={style.iconCard}>
              <Icon
                name="cancel"
                size={27}
                color={PRIMARY_COLOR}
                onPress={setShowModal}
              />
            </View>
          </View>
          <View style={style.headerTable}>
            <Text style={style.textHeader}>Producto</Text>
            <View style={style.headerInformation}>
              <Text style={style.textInformation}>Pre.</Text>
              <Text style={style.textInformation}>Cant.</Text>
              <Text style={style.textInformation}>Total</Text>
            </View>
          </View>
          <FlatList
            data={car}
            renderItem={({ item }) => (
              <View style={style.headerTable}>
                <Text>{item.name}</Text>
                <View style={style.headerInformation}>
                  <Text style={{ paddingHorizontal: 20 }}>{item.price}</Text>
                  <Text style={{ paddingHorizontal: 20 }}>
                    {item.totalQuantity}
                  </Text>
                  <Text style={{ paddingHorizontal: 20 }}>
                    {item.price * item.totalQuantity}
                  </Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
          <View style={style.contentTotalPay}>
            <Text>Total a pagar ${totalPay()}</Text>
          </View>
          <View style={style.headerModal}>
            <Text style={style.titleModal}>Pago</Text>
            <View style={style.iconCard}>
              <Icon
                name="payments"
                size={27}
                color={PRIMARY_COLOR}
                onPress={setShowModal}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
