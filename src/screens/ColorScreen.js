import React, { useState } from "react";
import { View, StyleSheet, Text, Button , FlatList } from "react-native";

const ColorScreen = () => {
  const [colorList, setColor] = useState([]);
  return (
    <View>
      <Button
        title="Add Color"
        onPress={() => {
          setColor([...colorList, generateRandomRgbColor()]);
        }}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={colorList}
        renderItem={({ item }) => {
            console.log(item)
          return (
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: item,
              }}
            ></View>
          );
        }}
      />
    </View>
  );
};

const generateRandomRgbColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
