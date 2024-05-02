import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Onboarding from "./Onboarding";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeScreen from "./HomeScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";


const Global_API_KEY = process.env.API_KEY



const index = () => {
  const [firstLaunch, setFirstLaunch] = useState<Boolean | null>(null);


 
  useEffect(() => {
    async function checkFirstLaunch() {
      try {
        const value = await AsyncStorage.getItem("appLaunched");
        if (value === null) {
          setFirstLaunch(true);
          // await AsyncStorage.setItem("isFirstLaunch", "false"); // Set to false after first launch
        } else {
          setFirstLaunch(false);
        }
      } catch (error) {
        console.error("Error storing data in AsyncStorage:", error);
      }
    }
    checkFirstLaunch();
  
  }, []);

 
  return (
   <>
     <GestureHandlerRootView style={{flex:1}}>
      
      {!firstLaunch ? <Onboarding /> : <HomeScreen />}
     </GestureHandlerRootView>
      
   </>
   
  );
};

export default index;

const styles = StyleSheet.create({});
