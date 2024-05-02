import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const RestScreen2 = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white" }}>Mon</Text>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <LottieView
          autoPlay
          loop
          source={require("../../assets/lottie/weather3d.json")}
          style={{ width: 70, aspectRatio: 1 }}
        />
        <Text style={{ color: "#fff" }}>Rainy</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "#fff" }}>+20°</Text>
        <Text style={{ color: "#fff" }}>+14°</Text>
      </View>
    </View>
  );
};

export default RestScreen2;

const styles = StyleSheet.create({});
