import{
    SafeAreaView,
    ScrollView,
    StatusBar,
    TextInput,
    View
} from 'react-native';

const TwoWayBinding = () =>{
    // Two way binding
    const [enteredName, setEnterName] = useState('');
    const [countNames, setCountNames] = useState([]);

    const hitNameInputHandler = (name) => {
        setEnterName(name)
    };
    
    const clickEventHandler = () => {
        setCountNames(_countNames => [...countNames, enteredName])
        console.log("Entered Name: ", enteredName);
    };
    
    return (
        <>
            <StatusBar barStyle='dark-content' />
            <SafeAreaView>
                <ScrollView>
                    <View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <TextInput 
                        onChangeText={hitNameInputHandler}
                        value={enteredName}
                        placeholder="Enter Name" 
                        style={{width: '80%', borderColor:'black', borderWidth: 1, padding: 10}} />
                    <Button title="name" onPress={clickEventHandler} /> 
                    </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
};

export default TwoWayBinding;