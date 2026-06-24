import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginHorizontal: 10,
  },
  textInput: { 
    borderWidth: 1, 
    borderColor: 'gray', 
    padding: 10, 
    marginBottom: 20,
    marginHorizontal: 10,
  },
  itemsContainer: {
    padding: 10,
    flex: 1,
  },
  itemCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  },
  cartSummary: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  orderCard: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  }
});

export default styles;