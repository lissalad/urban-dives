import { Text, View } from "react-native";
import MapView from "react-native-maps";

export default function MapTab() {
  return (
    <View style={styles.container}>
      {/* <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      ></MapView> */}
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
