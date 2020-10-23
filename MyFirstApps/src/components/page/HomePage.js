import React, { Component } from 'react';
import {
    View,
    Button,
    ScrollView,
    StyleSheet
} from 'react-native'

export default class HomePage extends Component{

    render() {
        return (
            <>
            <ScrollView>
            <View style={{ flexDirection: 'column', justifyContent:'center', margin: 10}}> 
                <View style={{ marginBottom: 10}}>
                    <Button title="Layout" color="#999" onPress={ () => this.props.navigation.navigate('Layout') } />
                </View>
                <View style={{ marginBottom: 10}}>
                    <Button title="Network" onPress={ () => this.props.navigation.navigate('Network') } /></View>
                <View style={{ marginBottom: 10}}>
                    <Button title="App State Test" onPress={ () => this.props.navigation.navigate('AppStateTest') } />
                </View>
            </View>
            </ScrollView>
            </>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        marginTop: 100
    }
})