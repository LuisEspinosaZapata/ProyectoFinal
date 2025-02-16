import React, { useState } from "react";
import { StatusBar, Text, View } from "react-native";

import { FlatList } from "react-native-gesture-handler";
import { TitleComponent } from "../../components/TitleComponent";
import { BodyComponennt } from "../../components/BodyComponennt";
import { PRIMARY_COLOR, SECUNDARY_COLOR } from "../../commons/constants";
import { CardProduct } from "./components/CardProduct";
import Icon from "react-native-vector-icons/MaterialIcons";
import { style } from "../../theme/appTheme";
import { ModalCar } from "./ModalCar";

//interface - arreglo de productos
export interface Product {
  id: number;
  name: string;
  precio: number;
  stock: number;
  pathImage: string;
}

//interface del arreglo del carro 
export interface Car {
  id: number;
  name: string;
  price: number;
  totalQuantity: number;
}

export const HomeScreen = () => {
  //arreglo de productos
  const products: Product[] = [
    {
      id: 1,
      name: "Margarita",
      precio: 8,
      stock: 25,
      pathImage:
        "https://hips.hearstapps.com/hmg-prod/images/margarita-coctel-receta-historia-wikipedia-thermomix-alcohol-mawey-1543228675.jpg",
    },
    {
      id: 2,
      name: "Paloma",
      precio: 7,
      stock: 25,
      pathImage:
        "https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/recipes_1200_800/public/2023-06/ES%20SEO%20Paloma%20cocktail.jpg",
    },
    {
      id: 3,
      name: "Mojito Tradicional",
      precio: 7,
      stock: 25,
      pathImage:
        "https://gourmet.expob2b.es/uploads/fotos_noticias/2017/06/w800px_15818-126695-en-verano-preparamos-el-tradicional-mojito.jpg",
    },
    {
      id: 4,
      name: "Mojito de frutos rojos",
      precio: 8,
      stock: 25,
      pathImage: "https://i.pinimg.com/736x/90/84/ba/9084bae64a5d8cd6631199d5184e4df1.jpg",
    },
    {
      id: 5,
      name: "Diquiri Tradicional",
      precio: 6,
      stock: 25,
      pathImage:
        "https://www.hogarmania.com/archivos/201105/daikiri-con-alcohol-xl-668x400x80xX.jpg",
    },
    {
      id: 6,
      name: "Diquiri Mora",
      precio: 8,
      stock: 25,
      pathImage:
        "https://monin.blob.core.windows.net/recipe/images/mrd/drink/e9e44517-61f4-46a3-b63d-7620c7a41f5f-1.png",
    },
    {
      id: 7,
      name: "Pi;a colada",
      precio: 10,
      stock: 25,
      pathImage:
        "https://images.cocktailwave.com/coconut-cream-pina-colada.png",
    },

  ];

  //hook useState manipular el estado del producto
  const [productsState, setProductsState] = useState(products);

  //hook useState manipular el stado del arreglo del carrito de compras
  const [car, setCar] = useState<Car[]>([]);

  //hook useState para ser visible para manipular el moval del car
  const [showModal, setShowModal] = useState<boolean>(false);

  //funcion para controlar es stock
  const handleChageStockProduct = (idProduct: number, quantity: number) => {
    const updateStock = productsState.map((item) =>
      item.id === idProduct ? { ...item, stock: item.stock - quantity } : item
    );
    //actualizar  imformacion arreglo  - stock
    setProductsState(updateStock);
    //llamar función agregar carrito
    addProduct(idProduct, quantity);
  };
  // funcion agreagr productos al carrito de compras
  const addProduct = (idProduct: number, quantity: number) => {
    //buscar el producto que se desea agregar en el carrito
    const product = productsState.find((item) => item.id === idProduct);

    //contolar en el caso que no se encuentre el producto
    if (!product) {
      return;
    }

    // si se encontro el producto -objeto prodcnto car para el car
    const newProductCar: Car = {
      id: product.id,
      name: product.name,
      price: product.precio,
      totalQuantity: quantity,
    };

    //Agregar al arreglo del carrito de compras
    setCar([...car, newProductCar]);
    //console.log(car);
  };

  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <View style={style.contentHeaderHome}>
        <TitleComponent title="Elige tus Cocteles..." />
        <View style={style.iconCarHome}>
          <Text style={style.textIconCarHome}>{car.length}</Text>
        <Icon 
        name="wine-bar" 
        size={40} 
        color={SECUNDARY_COLOR} 
        onPress={()=>setShowModal(!showModal)}/>
        </View>
      </View>
      <BodyComponennt>
        <FlatList
          data={productsState}
          renderItem={({ item }) => (
            <CardProduct
              product={item}
              handleChageStockProduct={handleChageStockProduct}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{justifyContent:'space-between'}}
        />
      </BodyComponennt>
      <ModalCar 
      isVisible={showModal} 
      car={car} 
      setShowModal={()=>setShowModal(!showModal)}/>
    </View>
  );
};
