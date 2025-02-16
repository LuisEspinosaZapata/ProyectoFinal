import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { Product } from "../HomeScreen";
import { style } from "../../../theme/appTheme";
import Icon from "react-native-vector-icons/MaterialIcons";
import { PRIMARY_COLOR } from "../../../commons/constants";
import { ModalProduct } from "./ModalProduct";

//interface - props
interface Props {
  product: Product;
  handleChageStockProduct: (idProduct: number, quantity:number) => void;
}

export const CardProduct = ({ product,handleChageStockProduct }: Props) => {
  //hook useState: manipula la visualización o no del modal
  const [shoModal, setShoModal] = useState<boolean>(false);

  return (
    <View>
      <View style={style.contentCard}>
        <Image
          source={{
            uri: product.pathImage,
          }}
          style={style.imageCard}
        />
        <View>
          <Text style={style.titleCard}>{product.name}</Text>
          <Text>Precio: ${product.precio.toFixed(2)}</Text>
        </View>
        <View style={style.iconCard}>
          <Icon 
          name="add-shopping-cart" 
          size={33} 
          color={PRIMARY_COLOR} 
          onPress={()=> setShoModal(!shoModal)}/>
        </View>
      </View>
      <ModalProduct 
      isVisible={shoModal} 
      setShoModal={()=> setShoModal(!shoModal)} 
      product={product}
      handleChageStockProduct={handleChageStockProduct}/>
    </View>
  );
};
