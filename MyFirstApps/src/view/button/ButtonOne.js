import React, { Component } from 'react';
import {
    Button
} from 'react-native';


export default class ButtonOne extends Component {
    render(){
        return (
            <Button onPress={this.props.onPress} title={this.props.title} />
        )
    }
};