import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedTab from "./components/FeedTab";
import MapTab from "./components/MapTab.js";
import CalendarTab from "./components/CalendarTab.js";
import { CalendarIcon, HomeIcon, MapIcon } from "./components/Icons";
import { Ionicons } from "react-native-vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Map") {
              iconName = focused ? "map" : "map-outline";
            } else if (route.name === "Calendar") {
              iconName = focused ? "calendar" : "calendar-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarLabel: () => null, // hide the text labels
          tabBarActiveTintColor: "teal",
          tabBarInactiveTintColor: "gray",
          headerStyle: {
            backgroundColor: "teal",
          },
          headerTintColor: "#dff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        })}
      >
        <Tab.Screen name="Home" component={FeedTab} />
        <Tab.Screen name="Calendar" component={CalendarTab} />
        <Tab.Screen name="Map" component={MapTab} />
      </Tab.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
