import React from 'react';
import {
    View,
    Button,
    ScrollView
} from 'react-native'

export default class Home extends Component{
    constructor(){
        super();
    }
    
    render() {
        return (
            <View style={{width:100, height:500, backgroundColor: '#000'}}> 
                <Button title="Columns One" />
                <Button title="Row One" />
            </View>
        );
    }
}