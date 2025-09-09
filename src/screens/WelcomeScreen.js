import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { StatusBar } from "expo-status-bar";
const WelcomeScreen = () => {
  return (
    <View
      style={tw`flex-1 justify-center items-center space-y-10 bg-amber-500`}
    >
      <StatusBar style="light" />

      {/* logo with rings */}
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
