import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function MapTab() {
  const selectedFind = useSelector((state) => state.finds.selectedFind);

  return (
    <View style={styles.container}>
      <Text>{selectedFind.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginBottom: 8,
    width: "100%",
    backgroundColor: "white",
  },
});
