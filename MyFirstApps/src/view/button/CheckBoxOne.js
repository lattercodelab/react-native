import React, { Component, useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class CheckBoxOne extends Component{

    state = {
        isChecked: false
    }

    constructor(props){
        super(props);
    }

    render(){
        return(
            <TouchableOpacity onPress={ () => {
                this.setState({
                    isChecked: !this.state.isChecked
                })
            } }>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                    disabled={false}
                    value={this.state.isChecked}
                    onValueChange={ (newValue) =>  this.props.toggleCheckBox(newValue)} />
                    <Text>{ this.state.isChecked ? "Checked" : "Unchecked" }</Text>
                </View>   
            </TouchableOpacity>
        )
    }
}

export default () =>{

    const [value, setValue] = useState(false)

    return(
        <CheckBoxOne value={value} toggleCheckBox={setValue} />
    )
}