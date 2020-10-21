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
            <View style={{ flexDirection: 'column', padding: 10, justifyContent:'center', alignItems:'stretch' }}> 
                <Button title="Layout" onPress={ () => this.props.navigation.navigate('Layout') } style={ styles.buttonStyle } />
                <Button title="Network" onPress={ () => this.props.navigation.navigate('Network') } style={ styles.buttonStyle } />
                <Button title="App State Test" onPress={ () => this.props.navigation.navigate('AppStateTest') } style={ styles.buttonStyle } />
            </View>
            </ScrollView>
            </>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    }
})