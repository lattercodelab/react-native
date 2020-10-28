import React, { Component } from 'react';
import {
    View,
    Button,
    ScrollView,
    StyleSheet
} from 'react-native'

export default class HomePage extends Component{

    openPage = (title, path) => {
        return (
            <View style={{ marginBottom: 10 }}>
                <Button title={title} onPress={() => this.props.navigation.navigate(path)} />
            </View>
        )
    }

    render() {
        return (
            <>
            <ScrollView>
            <View style={{ flexDirection: 'column', justifyContent:'center', margin: 10}}> 
                { this.openPage("Layout", "Layout") }
                { this.openPage("Network", "Network") }
                { this.openPage("AppState Test", "AppStateTest") }
                { this.openPage("UseEffect Test", "UseEffectTest") }
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