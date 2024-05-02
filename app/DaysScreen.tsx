import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import HeaderBottom from "../src/components/HeaderBottom";
import RestScreen2 from "../src/components/RestScreen2";
import { Stack, router } from "expo-router";
import { WeatherData } from "./HomeScreen";

const DaysScreen = ({ data }: { data: WeatherData }) => {
  return (
    <SafeAreaView
      style={[{ paddingTop: StatusBar.currentHeight }, styles.container]}
    >
      <Stack.Screen options={{ headerShown: false }} />
      <LinearGradient
        colors={["#00E8F5", "#00A8F5"]}
        style={{
          flex: 1,
          borderBottomLeftRadius: 70,
          borderBottomRightRadius: 70,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <Pressable onPress={() => router.back()}>
            <Entypo name="chevron-left" size={24} color="white" />
          </Pressable>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Entypo name="calendar" size={24} color="white" />
            <Text style={{ color: "white" }}>7 Days</Text>
          </View>
          <Entypo name="dots-three-vertical" size={24} color="white" />
        </View>

        {/* // weather view  */}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          {/* Overall center weather view View  */}

          <View>
            <LottieView
              source={require("../assets/lottie/weather3d.json")}
              autoPlay
              loop
              style={{ width: 150, aspectRatio: 1 }}
            />
          </View>
          <View>
            <Text style={{ color: "#fff", fontSize: 25 }}>Tomorrow</Text>
            <Text style={{ color: "#fff", fontSize: 45 }}> 20<Text style={{ fontSize: 30 }}>/17°</Text>
            </Text>
            <Text style={{ color: "gainsboro" }}>Rainy-Cloud</Text>
          </View>
        </View>
        {data.current && <HeaderBottom data={data} />}
      </LinearGradient>
      <RestScreen2 />
    </SafeAreaView>
  );
};

export default DaysScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
