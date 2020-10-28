import React, { useState, useEffect } from 'react';
import { Component } from 'react';
import {
    View,
    Button
} from 'react-native';

class UseEffectTest extends Component{

    state = {
        page: 0
    }

    render(){
        return(
            <View>
                <Button onPress={() => 
                    {

                        this.setState({
                            page: this.state.page + 1
                        });

                        this.props.setPage(this.state.page)
                    }
                } title="Click here to update page" />
            </View>
        )
    }
}

export default () => {

    const [page, setPage] = useState(0);

    // Example one
    // The clean-up function runs before the component is removed from the UI to 
    // prevent memory leaks
    
    useEffect(() => {
        // componentWillMount
        // const subscription = props.source.subscribe();
        console.log("start");
        return () =>{
            // componentWillUnmount
            // Clean up the subscription
            // subscription.unsubscribe();
            
            console.log("end");

        }
    })

    // Example Two
    // Unlike componentDidMount and componentDidUpdate, the function passed to useEffect 
    // fires after layout and paint, during a deferred event

    // We don’t need to create a new subscription on every update, 
    // only if the page has changed.
    useEffect(() => {
        // const subscription = props.source.subscribe();
        console.log("Create New One");
        return () =>{
            // subscription.unsubscribe();
            console.log("Clear");
        }
    }, [page])

    return(
        <UseEffectTest setPage={setPage} />
    )
}