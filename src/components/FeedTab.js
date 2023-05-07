import { Text, View, FlatList, SafeAreaView } from "react-native";
import CurbPost from "./CurbPost";
import data from "../../curb-finds";

export default function FeedTab() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={data}
          renderItem={({ item }) => <CurbPost post={item} />}
          keyExtractor={(post) => post.id}
          style={{ height: "100%" }}
        />
      </SafeAreaView>
    </View>
  );
}
