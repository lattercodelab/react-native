import React, { Component } from 'react';
import {
    Button,
    Alert
} from 'react-native';


export default class ButtonOne extends Component {
    render(){
        return (
            <Button onPress={() => Alert.alert('Button with adjusted color pressed')} title={this.props.title} />
        )
    }
};