import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Picker } from '@react-native-community/picker';
import ButtonOne from './../../view/button/ButtonOne';
import SwitchOne from './../../view/button/SwitchOne';

export default class Layoutpage extends Component{
    
    elements = [
        <ButtonOne title="Button One" />,
        <SwitchOne />
    ]

    state = {
        key: 1,
        name: 'none',
        element: null,
        selectedValue: 0
    }

    constructor(props){
        super(props);
        this.state.element = this.elements[0]
    }

    render(){
        return( 
            <View>
                <Picker 
                    selectedValue={this.state.selectedValue}
                    style={{height: 50, padding:10}}
                    onValueChange={ (itemValue, itemIndex) => { 
                        
                        this.setState({
                            element: this.elements[itemIndex],
                            key: itemIndex,
                            selectedValue: itemIndex
                        })
                        
                    }}>
                        <Picker.Item label="Button One" value={ 0 } />
                        <Picker.Item label="Swicth One" value={ 1 } />
                </Picker>
                <ScrollView>
                    <View style={{backgroundColor: '#000'}}>
                        { this.state.element }
                    </View>
                </ScrollView>
            </View>
        )
    }
}