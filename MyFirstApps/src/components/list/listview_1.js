import React from 'react';
import {
    View,
    Text,
    FlatList,
    StatusBar,
    SafeAreaView
} from 'react-native'

const items = ["one", "three", "four", "five", "six"];

const renderItem = (item, index) => {
    return (
      <View style={styles.listItem} key={"item_$index"}>
        <Text key={index}>{item.name}</Text>
      </View>
    )
}

const ListView_1 = () =>{
    return (
        <>
            <StatusBar barStyle='dark-content' />
            <SafeAreaView>
                <FlatList data={items} renderItem={renderItem} /> 
            </SafeAreaView>
        </>
    )
}

export default ListView_1;