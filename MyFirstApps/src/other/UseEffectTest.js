import React, { useState, useEffect } from 'react';
import { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

class UseEffectTest extends Component{

    state = {
        page: 0
    }

    render(){
        return(
            <View>
                <Text>Current Page : { this.state.page }</Text>
                <Text>{ this.props.updateState }</Text>
                <Button onPress={() => 
                    {

                        this.setState({
                            page: this.state.page + 1
                        });

                        this.props.setUpdate(true)
                    }
                } title="Click here to update page" />
            </View>
        )
    }
}

export default () => {

    const [isUpdated, setUpdate] = useState(false);
    const [updateState, setUpdateState] = useState("Ready");

    // useLayoutEffect : it will force to trigger the "useEffect" to run after that it has executed. 

    // Example one: componentDidMount
    // The clean-up function runs before the component is removed from the UI to 
    // prevent memory leaks
    
    // useEffect(() => {
    //     // componentWillMount
    //     // const subscription = props.source.subscribe();
    //     console.log("start"); // when the component render that will be run once
    //     return () =>{
    //         // componentWillUnmount
    //         // Clean up the subscription
    //         // subscription.unsubscribe();
            
    //         console.log("end");

    //     }
    // }) <== paramtar empty it will run only once

    // Example Two
    // Unlike componentDidMount and componentDidUpdate, the function passed to useEffect 
    // fires after layout and paint, during a deferred event

    // We don’t need to create a new subscription on every update, 
    // only if the page has changed.
    useEffect(() => {
        // const subscription = props.source.subscribe();
        if(isUpdated){
            setUpdateState("Updating...");
            setTimeout(()=>{
                console.log("Data Updated.");
                setUpdateState("Updated.");
            }, 2000);
        }

        console.log("==> Effect start..");
        return () =>{
            // subscription.unsubscribe();
            console.log("Updated Finished");
            console.log("==> Effect End.");
            setUpdate(false)
        }
    }, [isUpdated])

    return(
        <UseEffectTest setUpdate={setUpdate} isUpdated={isUpdated} updateState={updateState} setUpdateState={setUpdateState} />
    )
}