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

const Stack = createStackNavigator();
const MyStack = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomePage} options={{
                title: 'Home',
                headerStyle: {
                    backgroundColor: '#000'
                },
                headerTintColor: '#fff'
            }} />
            <Stack.Screen name="Layout" component={LayoutPage} />
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

