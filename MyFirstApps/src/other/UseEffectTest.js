import React, { useState, useEffect } from 'react';
import { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

class UseEffectTest extends Component{
    render(){
        return(
            <View>
                
            </View>
        )
    }
}

export default () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = this.setTimeOut(() => {
            
        }, 1000);

        return () =>{
            clearInterval(this.interval);
        }
    })

    return(
        <UseEffectTest />
    )
}