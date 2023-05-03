import { Text, View, StyleSheet, TextInput } from "react-native";
import { Calendar } from "react-native-calendars";

export default function CalendarTab() {
  return (
    <View style={styles.container}>
      <Calendar style={styles.calendar} />
      <View style={styles.form}>
        <Text style={styles.prompt}>
          Enter an address to view garbage pickup dates.
        </Text>
        <TextInput style={styles.input} />
      </View>
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

  calendar: {
    flex: 1,
    width: "100%",
  },

  form: {
    flex: 1,
    flexDirection: "column",
    gap: 8,
    marginTop: 24,
    marginHorizontal: 20,
  },

  prompt: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
  },
});
