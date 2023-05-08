import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE, MapMarker } from "react-native-maps";
import { useSelector } from "react-redux";

export default function MapTab() {
  const selectedFind = useSelector((state) => state.finds.selectedFind);
  // console.log(JSON.stringify(selectedFind));

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        // initialRegion={{
        //   latitude: selectedFind.latitude,
        //   longitude: selectedFind.longitude,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,
        // }}
        region={{
          latitude: selectedFind.latitude,
          longitude: selectedFind.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <MapMarker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title={selectedFind.title}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
