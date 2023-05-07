import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedFind } from "../features/finds/FindSlice";

export default function CurbPost({ post }) {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Image source={post.uri} style={styles.img} />
      <View style={styles.details}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.description}>{post.description}</Text>
      </View>
      <TouchableOpacity onPress={() => dispatch(setSelectedFind(post))}>
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
  },

  details: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 8,
    gap: 4,
  },

  title: {
    fontSize: 20,
    fontWeight: 600,
  },

  img: {
    backgroundColor: "teal",
    height: 100,
    width: 100,
    borderRadius: 8,
  },
});
