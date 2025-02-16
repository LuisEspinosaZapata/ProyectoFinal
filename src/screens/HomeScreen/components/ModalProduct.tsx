import React, { useState } from "react";
import { Image, Modal, Text, useWindowDimensions, View } from "react-native";
import { style } from "../../../theme/appTheme";
import { TouchableOpacity } from "react-native";
import { Product } from "../HomeScreen";
import Icon from "react-native-vector-icons/MaterialIcons";
import { PRIMARY_COLOR } from "../../../commons/constants";
// interface props
interface Props {
  product: Product;
  isVisible: boolean;
  setShoModal: () => void; //funcion para serrar el modal
  handleChageStockProduct: (idProduct: number, quantity: number) => void;
}

export const ModalProduct = ({
  isVisible,
  setShoModal,
  product,
  handleChageStockProduct,
}: Props) => {
  //hook useWindowsDimension: tomar el tamaño de la pantalla
  const { width } = useWindowDimensions();
  //hook useState: manipular el estado del contador
  const [quantity, setQuantity] = useState<number>(1);
  //funcion para actalizar el contador
  const handleChangeQuantity = (value: number) => {
    setQuantity(quantity + value);
  };

  //función para agregar el producto al caarrito de compras
  const handleAddProduct = () => {
    //actualizar el stock
    handleChageStockProduct(product.id, quantity);
    //actualizar el contador quantity
    setQuantity(1);
    //cerrar el modal
    setShoModal();
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
            <Text style={style.titleModal}>
              {product.name}- ${product.precio.toFixed(2)}
            </Text>
            <View style={style.iconCard}>
              <Icon
                name="cancel"
                size={27}
                color={PRIMARY_COLOR}
                onPress={setShoModal}
              />
            </View>
          </View>
          <View style={style.contentImageModal}>
            <Image
              source={{
                uri: product.pathImage,
              }}
              style={style.imageModal}
            />
            {product.stock === 0 ? (
              <Text style={style.textStock}>Producto agotado;</Text>
            ) : (
              <View>
                <View style={style.contentQuantity}>
                  <TouchableOpacity
                    onPress={() => handleChangeQuantity(1)}
                    disabled={quantity === product.stock}
                    style={style.buttonQuantity}
                  >
                    <Text style={style.textButtonQuantity}>+</Text>
                  </TouchableOpacity>
                  <Text style={style.texQuiantity}>{quantity}</Text>
                  <TouchableOpacity
                    onPress={() => handleChangeQuantity(-1)}
                    disabled={quantity === 1}
                    style={style.buttonQuantity}
                  >
                    <Text style={style.textButtonQuantity}>-</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={style.texQuiantity}>
                    Total: ${(product.precio * quantity).toFixed(2)}
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={handleAddProduct}
                  style={style.buttonAddCard}
                >
                  <Text style={style.textButtonAddCard}>Agregar Carrito</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};
