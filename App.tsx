import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";

import DaysScreen from "./app/DaysScreen";
import {
  Oswald_200ExtraLight,
  Oswald_300Light,
  Oswald_400Regular,
  Oswald_500Medium,
  Oswald_600SemiBold,
  Oswald_700Bold,
  useFonts,
} from "@expo-google-fonts/oswald";
import HomeScreen from "./app/HomeScreen";

const [fontsLoaded, fontError] = useFonts({
  OswalELight: Oswald_200ExtraLight,
  OswalLight: Oswald_300Light,
  OswalRegular: Oswald_400Regular,
  OswalMedium: Oswald_500Medium,
  OswalSemiBold: Oswald_600SemiBold,
  OswalBold: Oswald_700Bold,
});

export default function App() {
  return (
    <HomeScreen />
    // <DaysScreen />
  );
}

const styles = StyleSheet.create({
  container: {},
});
