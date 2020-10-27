import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native'

const items = [
    {
        title: "one"
    }, 
    {
        title: "three"
    },
    {
        title:"four"
    },
    {
        title: "five"
    },
    {
        title: "six"
    }
];

const cellItem = ({item}) => {
    return (
      <View style={styles.cellItem} key={item.key}>
        <Text key={item.key}>{item.title}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    cellItem:{
        padding: 10,
        margin: 10
    }
})

class ListViewOne extends Component{
    render(){
        return (
            <>
            <FlatList data={this.props.items} renderItem={this.props.cellItem} keyExtractor={(item, index) => index.toString()} />
            </> 
        )
    }
}

export default () =>{
    return(
        <ListViewOne  items={items} cellItem={cellItem} />
    )
}