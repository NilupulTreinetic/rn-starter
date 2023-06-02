import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ImageDetail = (props) => {
  console.log(props);
  return (
    <View>
      <Image source={props.imageSource} />
      <Text>{props.imgTitle}</Text>
      <Text style={styles.ratingStyle}>{props.rating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingStyle: {
    fontSize: 20,
    paddingBottom: 20,
  },
});

export default ImageDetail;
