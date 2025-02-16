import { StyleSheet } from "react-native";
import {
  INPUT_COLOR,
  PRIMARY_COLOR,
  SECUNDARY_COLOR,
} from "../commons/constants";

export const style = StyleSheet.create({
  globalTitle: {
    color: SECUNDARY_COLOR,
    fontSize: 27,
    paddingHorizontal: 30,
    paddingVertical: 30,
    fontWeight: "bold",
  },
  contentBody: {
    backgroundColor: SECUNDARY_COLOR,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 30,
    paddingHorizontal: 40,
    paddingTop: 40,
  },
  titleBody: {
    fontSize: 17,
    fontWeight: "bold",
    color: "black",
  },
  descriptionBody: {
    fontSize: 15,
  },
  inputText: {
    backgroundColor: INPUT_COLOR,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
  },
  contentInputs: {
    marginTop: 40,
    gap: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: SECUNDARY_COLOR,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  iconPassword: {
    position: "absolute",
    right: 20,
    zIndex: 1,
    marginTop: 20,
  },
  textRedirrection: {
    color: PRIMARY_COLOR,
    marginTop: 30,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  contentCard: {
    flex: 1,
    width: 180,
    justifyContent: "center",
    padding: 20,
    borderWidth: 1,
    borderColor: SECUNDARY_COLOR,
    borderStyle: "solid",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 2.26,
    elevation: 2,
    marginBottom: 15,
  },
  titleCard: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 15,
  },
  imageCard: {
    width: 70,
    height: 70,
  },
  iconCard: {
    flex: 1,
    alignItems: "flex-end",
  },
  contentPrincipal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  contentModal: {
    backgroundColor: "white",
    padding: 25,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  headerModal: {
    flexDirection: "row",
    borderBlockColor: "#ccc",
    borderBottomWidth: 2,
    padding: 2,
  },
  titleModal: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  contentImageModal: {
    alignItems: "center",
  },
  imageModal: {
    width: 200,
    height: 200,
  },
  contentQuantity: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonQuantity: {
    width: 50,
    height: 50,
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
  },
  textButtonQuantity: {
    color: SECUNDARY_COLOR,
    fontSize: 20,
    fontWeight: "bold",
  },
  texQuiantity: {
    fontSize: 20,
    color: "#000",
    textAlign: "center",
  },
  buttonAddCard: {
    marginTop: 15,
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  textButtonAddCard: {
    color: SECUNDARY_COLOR,
    fontWeight: "bold",
  },
  textStock: {
    fontSize: 19,
    color: "#6f1313",
    textAlign: "center",
  },
  contentHeaderHome: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconCarHome: {
    flex: 1,
    alignItems: "flex-end",
    paddingHorizontal: 30,
  },
  textIconCarHome: {
    backgroundColor: "#fff",
    borderRadius: 17,
    paddingHorizontal: 5,
    fontWeight: "bold",
    fontSize: 12,
  },
  headerTable: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerInformation: {
    flexDirection: "row",
  },
  textInformation: {
    marginHorizontal: 10,
    fontWeight: "bold",
    color: "#000",
  },
  textHeader: {
    fontWeight: "bold",
    color: "#000",
  },
  contentTotalPay: {
    alignItems: "flex-end",
    marginTop: 25,
  },
  logoCenter:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});
