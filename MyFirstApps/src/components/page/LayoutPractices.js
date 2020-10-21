import React, { Component } from 'react';

import {
    View
} from 'react-native';

/** Navigation library */
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context'

import SampleCustomView from './../../practices/SampleCustomView';

export default class LayoutPractice extends Component{


    render() {

        const Stack = createStackNavigator();
        
        return (
            <>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Sample Custom View" component={SampleCustomView} />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
            </>
        )
    }
}