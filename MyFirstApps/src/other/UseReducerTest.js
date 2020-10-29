import React, {Component} from 'react';
import {
    View
} from 'react-native';


class UserReducerTest extends Component {

    render(){
        return(
            <View>
                { this.props.name + this.props.address }
            </View>
        )
    }
}

export default () => {
    return (
        <SafeAreaView>
            <UserReducerTest name="" address="" />
        </SafeAreaView>
    )
}