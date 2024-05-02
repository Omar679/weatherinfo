import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import { router } from "expo-router";

const Bottom = () => {
  return (
    <View style={{ marginHorizontal: 30 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Today</Text>
        <Pressable
          onPress={() => router.navigate("./DaysScreen")}
          style={{ flexDirection: "row" }}
        >
          <Text style={{ color: "white" }}>7 Days</Text>
          <Entypo name="chevron-right" size={24} color="white" />
        </Pressable>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            alignItems: "center",
            borderWidth: 1,
            borderColor: "white",
            padding: 5,
            borderRadius: 20,
            margin: 10,
          }}
        >
          <Text style={{ color: "white" }}>23°</Text>
          <LottieView
            source={require("../../assets/lottie/3dcloud.json")}
            autoPlay
            loop
            style={{ width: 50, aspectRatio: 1 }}
          />
          <Text style={{ color: "white" }}>10:00</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            borderWidth: 1,
            borderColor: "white",
            padding: 5,
            borderRadius: 20,
            margin: 10,
          }}
        >
          <Text style={{ color: "white" }}>23°</Text>
          <LottieView
            source={require("../../assets/lottie/thunder.json")}
            autoPlay
            loop
            style={{ width: 50, aspectRatio: 1 }}
          />
          <Text style={{ color: "white" }}>10:00</Text>
        </View>
      </View>
    </View>
  );
};

export default Bottom;

const styles = StyleSheet.create({});
