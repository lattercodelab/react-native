import React, { useState, useEffect } from 'react';
import { Component } from 'react';
import {
    View,
    Button
} from 'react-native';

class UseEffectTest extends Component{
    render(){
        return(
            <View>
                <Button title="Add Count" onPress={() => this.props.setCount(count => count++ ) } />
            </View>
        )
    }
}

export default () => {

    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Count : ${count}")
    }, count)

    // useEffect(() => {

    //     const interval = setTimeout(() => {
    //         console.log("Add")
    //         setCount(count => count + 1 )
    //     }, 5000);
        
    //     return () =>{
    //         console.log("Reset")
    //         clearInterval(interval);
    //         setCount(count => 10 )
    //     }
    // }, count)

    return(
        <UseEffectTest setCount={setCount} />
    )
}