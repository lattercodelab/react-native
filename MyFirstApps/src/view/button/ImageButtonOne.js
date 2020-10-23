import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

class ImageButtonOne extends Component{
    render(){
        return(
            <>
                <TouchableOpacity style={this.props.buttonStyle} activeOpacity={0.5}>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Image style={{ width:20, height:20}} source={require('./../../resources/images/icon/ic_facebook.png')} />
                        <View style={{ width:1, height:'80%', marginLeft: 10, marginRight: 10, backgroundColor: '#f7f', alignItems:'stretch' }} />
                        <Text>Image Button Example</Text>
                    </View>
                </TouchableOpacity>
            </>
        )
    }
}

export default () =>{
    return(
        <ImageButtonOne buttonStyle={styles.button} />
    )
}

const styles = StyleSheet.create({
    button :{
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    }
})