import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedFind } from "../features/finds/FindSlice";
import { useNavigation } from "@react-navigation/native";
import MapTab from "./MapTab.js";

export default function CurbPost({ post }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const selectedFind = useSelector((state) => state.finds.selectedFind);
  // console.log(selectedFind.title + " is initial value!");

  const handleLocationPress = () => {
    dispatch(setSelectedFind(post));
    navigation.navigate("Map");
  };

  return (
    <View style={styles.container}>
      <Image source={post.uri} style={styles.img} />
      <View style={styles.details}>
        <Text style={styles.title}>{post.title}</Text>

        <Text style={styles.description}>{post.description}</Text>
      </View>
      <TouchableOpacity
        style={styles.locationButton}
        onPress={handleLocationPress}
      >
        <Ionicons name="location-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 12,
    marginBottom: 8,
    width: "100%",
    backgroundColor: "white",
    position: "relative",
  },

  details: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 8,
    gap: 4,
  },

  titleRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  locationButton: {
    padding: 2,
    position: "absolute",
    bottom: 8,
    right: 16,
  },

  title: {
    fontSize: 16,
    fontWeight: 600,
  },

  img: {
    backgroundColor: "teal",
    height: 100,
    width: 100,
    borderRadius: 8,
  },
});
