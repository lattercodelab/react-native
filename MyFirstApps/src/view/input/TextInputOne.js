import React, { Component, useState } from 'react';
import {
    TextInput,
    Button,
    View,
    Text
} from 'react-native';

class TextInputOne extends Component{

    constructor(props){
        super(props);
        this.state = {
            changedValue: null,
            result: null
        }
    }

    onChangeText(){
        console.log("Result: ", this.state.changedValue)
    }

    render(){
        return(
            <View style={{ flexDirection: 'column' }}>

                <View style={{ flexDirection: 'row'}}>
                    <TextInput 
                        style={{ justifyContent:'space-between', flex: 1, marginRight: 10, height: 40, borderColor: '#999', borderWidth: 1}}
                        onChangeText={text => 
                            this.setState({ 
                                changedValue: text 
                            })
                        }
                        placeholder="Enter Your Name:"
                    />
                </View>

                <Text>{this.state.changedValue}</Text>
            </View>
        )
    }
}

export default () =>{

    return(
        <TextInputOne />
    )
}