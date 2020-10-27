import React from 'react';
import { Component, useState } from 'react';
import {
    View,
    Text,
    Switch
} from 'react-native';

class SwitchOne extends Component{
    render(){
        return (
            <>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{paddingRight: 20}}>{ "Your Option is : " + (this.props.isEnabled ? "Open" : "Close") }</Text>
                <Switch
                    trackColor={{ false: 'green', true: 'red'}}
                    thumbColor={this.props.isEnabled ? "#00fbff" : "#b703ff"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={this.props.toggleSwitch}
                    value={this.props.isEnabled} />
            </View>
            </>
        )
    }
}

export default () =>{

    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () =>{
        setIsEnabled(
            previousState => !previousState
        )
    }

    return(
        <SwitchOne isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
    )
}