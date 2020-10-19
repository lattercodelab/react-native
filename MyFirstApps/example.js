/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  // Two way binding
  const [enteredName, setEnterName] = useState('');
  const [countNames, setCountNames] = useState([]);

  const hitNameInputHandler = (name) => {
    setEnterName(name)
  };

  const clickEventHandler = () => {
    setCountNames(_countNames => [...countNames, enteredName])
    console.log("Submit Entered Name: ", enteredName);
  }

  const renderItem = (item, index) => {
    return (
      <View style={styles.listItem} key={"item_$index"}>
        <Text key={index}>{item.name}</Text>
      </View>
    )
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

            <View style={styles.screen}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <TextInput 
              onChangeText={hitNameInputHandler}
              value={enteredName}
              placeholder="Enter Your Name" 
              style={{width: '80%', borderColor:'black', borderWidth: 1, padding: 10}} />
              <Button title="name" onPress={clickEventHandler} /> 
              </View>
            </View>

            <View style={{
              padding: 50, 
              flexDirection: 'row', 
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

            <ScrollView>
              <View>
                {countNames.map((name) => <View key={name} style={styles.listItem}><Text key={name}>{name}</Text></View> )}
              </View>
            </ScrollView>
        </ScrollView>

        {/* <FlatList data={countNames} renderItem={renderItem} />     */}

      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    borderStartColor: '#ccc',
    borderColor: '#f0f',
    borderWidth: 1
  }
});

export default App;
