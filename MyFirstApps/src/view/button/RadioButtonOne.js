import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

export default class RadioButtonOne extends Component{

    constructor(props){
        super(props);

        this.state = {
            items: [],
            selectedPosition: 0
        };

        this.state.items = this.props.items ?? ["one", "two", "three"];
    }

    setSelection(position){
        this.setState({ 
            selectedPosition: position
        });

        this.props.onSelectedPosition(position);
    }

    render(){
        return(
            this.state.items.map((data, index) =>
                <View key={index} style={{ flexDirection:'column', margin: 10}}>
                    { this.state.selectedPosition == index ?
                        <TouchableOpacity style={{ flexDirection: 'row', borderColor: 'red', borderWidth: 1, padding: 10}}>
                            <View style={{ width:20, height:20, borderRadius:12, borderWidth:2, borderColor: 'red', justifyContent:'center', alignItems:'center' }} >
                                <View style={{ width: 10, height: 10, borderRadius: 12, backgroundColor: 'red' }} />
                            </View>       
                            <Text style={{ paddingLeft: 10}}>{data}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={{ flexDirection: 'row', borderColor: 'red', borderWidth: 1, padding: 10}} onPress={() => this.setSelection(index) }>
                            <View style={{ width:20, height:20, borderRadius:12, borderWidth:2, borderColor: '#000' }} />
                            <Text style={{ paddingLeft: 10}}>{data}</Text>
                        </TouchableOpacity>
                    }
                </View>
            )
        )
    }
}