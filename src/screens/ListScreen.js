import React from "react";
import { View,Text,StyleSheet, FlatList} from "react-native";


const ListScreen =()=>{
    const friendList=[
        {name: 'Nilupul', age:27}, {name: 'Isuru', age:28}, {name: 'John', age:10}, {name: 'Wick', age:40}
    ];
    return (
        <FlatList
            keyExtractor={(friend)=>friend.name}
            data={friendList}
            renderItem={({item})=>{
                return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
        }}
        />
       
    );
}
const styles=StyleSheet.create({
    textStyle:{
        fontSize:20,
        marginVertical:30,
       paddingLeft:20
        
    }
});

export default ListScreen;
