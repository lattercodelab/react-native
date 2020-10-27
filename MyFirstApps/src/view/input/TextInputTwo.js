import React, { Component, useState } from 'react';
import {
    TextInput,
    Button,
    View,
    Text
} from 'react-native';

class TextInputTwo extends Component{
    render(){

        return(
            <View style={{ flexDirection: 'column' }}>

                <View style={{ flexDirection: 'row'}}>
                    <TextInput 
                        style={{ justifyContent:'space-between', flex: 1, marginRight: 10, height: 40, borderColor: '#999', borderWidth: 1}}
                        onChangeText={text => this.props.onChangeText(text)}
                        value={this.props.changedValue}
                        placeholder="Enter Your Name:"
                    />
                </View>

                <Text>{this.props.changedValue}</Text>
            </View>
        )
    }
}

export default () =>{

    const [changedValue, onChangeText] = useState(null)

    return(
        <TextInputTwo changedValue={changedValue} onChangeText={onChangeText} />
    )
}