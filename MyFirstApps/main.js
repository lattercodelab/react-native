import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, ScrollView, Text, View } from 'react-native';

/** Navigation library */
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

/** Component */
import Home from './src/components/home';

/** Child View */
import Columns_1 from './src/components/list/columns_1';
import Row_1 from './src/components/list/row_1';
import ListView_1 from './src/components/list/listview_1';

const Stack = createStackNavigator();
const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen children={() =>{
                    <Text>Hello World</Text>
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Main = () =>{
    return (
        <>
            <StatusBar barStyle='dark-content' />
            <SafeAreaView>
                <MyStack />
            </SafeAreaView>
        </>
    )
}
