import { Text, View, FlatList, SafeAreaView } from "react-native";
import CurbPost from "./CurbPost";
import * as data from "../curb-finds-data.json";

export default function FeedTab() {
  return (
    <View>
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={({ item }) => <CurbPost post={item} />}
          keyExtractor={(post) => post.id}
        />
      </SafeAreaView>
    </View>
  );
}
