import React from "react";
import {Text,StyleSheet, View} from "react-native";


const ComponentScreen =()=>{
    const myName='Nilupul';
    return(<View> 
        <Text style={styles.textStyle}> Lets start learn react native</Text>
        <Text style={styles.subHeaderStyle}> hi {myName}</Text>
        </View>);
}

const styles =StyleSheet.create({
    textStyle:{
        fontSize:45,
    },
    subHeaderStyle:{
        fontSize:20,
    },
});
export default ComponentScreen