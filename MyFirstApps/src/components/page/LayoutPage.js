import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Picker } from '@react-native-community/picker';
import ButtonOne from './../../view/button/ButtonOne';
import SwitchOne from './../../view/button/SwitchOne';
import ImageButtonOne from './../../view/button/ImageButtonOne';
import ColumnsOne from './../../view/list/ColumnsOne';
import RowOne from './../../view/list/RowOne';

export default class Layoutpage extends Component{
    
    elements = [
        <ButtonOne title="Button One" />,
        <SwitchOne />,
        <ImageButtonOne />,
        <ColumnsOne />,
        <RowOne />
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
                    <Picker.Item label="Image Button One" value={ 2 } />
                    <Picker.Item label="Column One" value={ 3 } />
                    <Picker.Item label="Row One" value={ 4 } />
                    
                </Picker>
                <ScrollView>
                    <View style={{padding: 10}}>
                        { this.state.element }
                    </View>
                </ScrollView>
            </View>
        )
    }
}