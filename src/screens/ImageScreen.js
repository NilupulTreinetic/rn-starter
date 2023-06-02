import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageDetail from "../components/ImageDetailComponent";

export default function ImageScreen() {
  return (
    <View>
      <Text>ImageScreen</Text>
      <ImageDetail imgTitle = "Forest" imageSource={require('../../assets/forest.jpg')} rating = {9} />
      <ImageDetail imgTitle = "Beach" imageSource={require('../../assets/beach.jpg')} rating = {10}/>
      <ImageDetail imgTitle = "Mountain" imageSource={require('../../assets/mountain.jpg')} rating = {5}/>
    </View>
  );
}

const styles = StyleSheet.create({});
