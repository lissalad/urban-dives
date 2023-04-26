import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CurbTab from "./components/CurbTab";
import LeaderboardTab from "./components/LeaderboardTab";
import CalendarTab from "./components/CalendarTab";
import { CalendarIcon, ChairIcon, LeaderboardIcon } from "./components/Icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Leaderboard"
          component={LeaderboardTab}
          options={{ tabBarIcon: LeaderboardIcon }}
        />
        <Tab.Screen
          name="Curb Alert"
          component={CurbTab}
          options={{ tabBarIcon: ChairIcon }}
        />
        <Tab.Screen
          name="Calendar"
          component={CalendarTab}
          options={{ tabBarIcon: CalendarIcon }}
        />
      </Tab.Navigator>
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
