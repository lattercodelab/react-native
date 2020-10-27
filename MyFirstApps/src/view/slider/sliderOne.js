import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';

class SliderOne extends Component {
    render(){
        return(
            <View style={{ flexDirection: 'column' }}>
                <Text>Normal</Text>
                <Slider minimumValue={0} maximumValue={1} minimumTrackTintColor="red" maximumTrackTintColor="blue" />
                <Text>Step 0.25</Text>
                <Slider step={0.25} minimumValue={0} maximumValue={1} minimumTrackTintColor="red" maximumTrackTintColor="blue" />
            </View>
        )
    }
}

export default () => {
    return(
        <SliderOne />
    )
}