import React,{ Component } from 'react';
import {
    View,
    Text
} from 'react-native';

export default class ColumnsOne extends Component {
    render(){
        return (
            <View>
                <View style={{
                    padding: 50, 
                    flexDirection: 'column', 
                    width: '80%', 
                    height: 300, 
                    justifyContent: 'space-around', 
                    alignItems: 'stretch'}}>

                    <View style={{
                        backgroundColor: 'red',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                        }}>
                        <Text>1</Text>
                    </View>

                    <View style={{
                        backgroundColor: 'yellow',
                        flex: 2,
                        justifyContent: 'space-around',
                        alignItems: 'center'}}>
                        <Text>2</Text>
                    </View>
                    
                    <View style={{
                        backgroundColor: 'blue',
                        flex: 3,
                        justifyContent: 'space-around',
                        alignItems: 'center'
                        }}>
                        <Text>3</Text>
                    </View>
                </View>
            </View>
        )
    }
}