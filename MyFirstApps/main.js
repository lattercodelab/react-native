import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, ScrollView, Text, View } from 'react-native';

/** Navigation library */
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context'

/** Component */
import HomePage from './src/components/page/HomePage';
import LayoutPage from './src/components/page/LayoutPage';
import LayoutPractices from './src/components/page/LayoutPractices';
import NetworkPage from './src/components/page/NetworkPage';
import AppStateTest from './src/other/AppStateTest';
import UseEffectTest from './src/other/UseEffectTest';

const Stack = createStackNavigator();
const MyStack = () =>{
    return (
        // @see : https://reactnavigation.org/docs/nesting-navigators/#navigating-to-a-screen-in-a-nested-navigator
        <Stack.Navigator>
            <Stack.Screen name="Home" component={ HomePage } options={{
                title: 'Welcome',
                headerStyle: {
                    backgroundColor: '#69bdd2'
                },
                headerTintColor: '#000'
            }} />
            <Stack.Screen name="Layout" component={ LayoutPage } />
            <Stack.Screen name="Network" component={ NetworkPage } />
            <Stack.Screen name="AppStateTest" component={ AppStateTest } />
            <Stack.Screen name="LayoutPractices" component={ LayoutPractices } />
            <Stack.Screen name="UseEffectTest" component={ UseEffectTest } />
        </Stack.Navigator>
    )
}

export default Main = () => {
    return (
        <>
        <SafeAreaProvider>
            <NavigationContainer>
                <MyStack />
            </NavigationContainer>
        </SafeAreaProvider>
        </>
    )
}

