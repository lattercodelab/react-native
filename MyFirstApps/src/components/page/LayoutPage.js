import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { ButtonOne } from './../../view/button/ButtonOne';
import { SwitchOne } from './../../view/button/SwitchOne';

export default class Layoutpage extends Component{

    constructor(props){
        super(props);
        this.state = {
            key: 1,
            name: 'none',
            element: null,
            selectedValue: 0
        }
    }

    _addButtonOne(){
        this.setState({
            
        })
    }

    render(){
        return( 
            <View>
                <Picker 
                    selectedValue={this.state.selectedValue}
                    style={{height: 50, backgroundColor:'red'}}
                    onValueChange={ (itemValue, itemIndex) => { 
                        this.setState({
                            element: itemValue,
                            key: itemIndex,
                            selectedValue: itemValue
                        })

                        switch(itemValue){
                            case 0:
                                _addButtonOne()
                                break;
                            case 1:

                                break;
                        }
                    }}>
                        <Picker.Item label="Button One" value="0" />
                        <Picker.Item label="Swicth One" value="1" />
                </Picker>
                <ScrollView>
                    <View>
                        { this.setState.element != null }
                    </View>
                </ScrollView>
            </View>
        )
    }
}