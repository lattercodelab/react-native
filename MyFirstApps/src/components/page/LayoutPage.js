import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Picker } from '@react-native-community/picker';
import ButtonOne from './../../view/button/ButtonOne';
import SwitchOne from './../../view/button/SwitchOne';
import ImageButtonOne from './../../view/button/ImageButtonOne';
import ColumnsOne from './../../view/list/ColumnsOne';
import RowOne from './../../view/list/RowOne';
import ListViewOne from './../../view/list/ListViewOne';
import TextInputOne from './../../view/input/TextInputOne';
import TextInputTwo from './../../view/input/TextInputTwo';
import RadioButtonOne from './../../view/button/RadioButtonOne';
import CheckBoxOne from './../../view/button/CheckBoxOne';
import SliderOne from './../../view/slider/sliderOne';

export default class Layoutpage extends Component{

    elements = [
        <ButtonOne title="Button One" />,
        <SwitchOne />,
        <ImageButtonOne />,
        <ColumnsOne />,
        <RowOne />,
        <ListViewOne />,
        <TextInputOne />,
        <TextInputTwo />,
        <RadioButtonOne onSelectedPosition={(position) => console.log("selected position: ", position)} />,
        <CheckBoxOne />,
        <SliderOne />
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
                    <Picker.Item label="List One" value={ 5 } />
                    <Picker.Item label="Input One" value={ 6 } />
                    <Picker.Item label="Input Two" value={ 7 } />
                    <Picker.Item label="RadioButton One" value={ 8 } />
                    <Picker.Item label="CheckBox One" value={ 9 } />
                    <Picker.Item label="Slider One" value={ 10 } />
                    
                </Picker>
                <View style={{padding: 10}}>
                    { this.state.element }
                </View>
            </View>
        )
    }
}