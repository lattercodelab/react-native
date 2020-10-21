import React, { Component, useEffect, useRef } from 'react';
import { 
    AppState,
    Text
} from 'react-native';

class AppStateTest extends Component{

    render(){
        return(
            <>
            <Text>App state Checking. Please check the log.</Text>
            </>
        )
    }
}

export default () => {
 
    const appsState = useRef(AppState.currentState);

    const _handleAppStateChange = (state) => {
        if(appsState.current.match(/inactive|background/) && state === "active"){
            console.log("App has come to the foreground!");
        }
        
        console.log("State:", state);
    };
    
    useEffect(() => {
        AppState.addEventListener("change", _handleAppStateChange);
    
        return() => {
            AppState.removeEventListener("change", _handleAppStateChange);
        }
    }, []);
    
    return(
        <AppStateTest />
    )    
}