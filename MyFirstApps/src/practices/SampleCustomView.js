import React from 'react';

import { View, Text } from 'react-native';

const CustomViewOne = () =>{
    return (
        <Text>Custom View One</Text>
    )
}

const CustomViewTwo = (props) =>{
    return (
        <Text>Hello : props.my_name</Text>
    )
}

function CustomViewThree(title, name){
    return (
        <Text>Hello: {title} {name}</Text>
    )
}

export default class SampleCustomeView extends React.Component{
    render() {
        return (
            <View>
                <CustomViewOne />
                <CustomViewTwo my_name="Vincent" />
                <CustomViewThreed title="Mr" name="Vincent" />
            </View>
        )
    }
}