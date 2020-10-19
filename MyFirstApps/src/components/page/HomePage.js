import React, { Component } from 'react';
import {
    View,
    Button,
    ScrollView
} from 'react-native'

export default class HomePage extends Component{
    render() {
        return (
            <>
            <ScrollView>
            <View> 
                <Button title="Layout" onPress={() => this.props.navigation.navigate('Layout')} />
            </View>
            </ScrollView>
            </>
        );
    }
}
