import { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Button, TextInput, Pressable, Alert, Switch, Modal, Image, ImageBackground} from 'react-native';
import Header from './header';
export default function AddContacts({navigation}) {

    const [userName, setUserName] = useState('');
    const [number, setNumber] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    function setusname(e) {
        
        setUserName(e);
        console.log(userName);
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName: userName, number: number, isWhatsapp: isEnabled })
    };
  
    const postExample = async () => {
        try {
            await fetch(
                'https://eofq4zxnv5bg85o.m.pipedream.net', requestOptions)
                .then(response => {
                    
                    setModalVisible(true);
                    console.log(response);
                   

                })
        }
        catch (error) {
            console.error(error);
        }
    }
return (
<View style={styles.container}>
<Header />
<View style={styles.goodarea}>
<Text style={styles.header}>Add Emergency Contacts</Text>
<TextInput style={styles.TextInput} placeholder="Enter Name" onChangeText={(abc) => setusname(abc)} />
<TextInput style={styles.TextInput} placeholder="Enter Number" onChangeText={(def) => setNumber(def)}/>
<View style={styles.inline}>
<Text style={{fontSize:20}}>Is registered with Whatsapp?</Text>
<Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      ></Switch>
      </View>
<Button title="Add"  onPress={postExample} />
</View>
<Modal
        animationType="slide"
        transparent={false}
        visible={isModalVisible}
        onRequestClose={() => {
            navigation.push('Dashboard');
          setModalVisible(false);
        }}
      >
<View style={{flex:1}} >
<Image source={require('./success.gif')} style={{width:"100%", height:"85%"}} />
<View style={styles.imageBottomText}>
<Text style={styles.header}>Contact { number } Number Added Successfully</Text>
</View>

</View>
      </Modal>

</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#ffffff',

color: 'white',
},
TextInput: {
    marginTop:20,
    marginBottom: 20,
fontSize: 20,
fontWeight: 'bold',

},
tiles: {
flexDirection: 'row',
marginLeft: 20,
justifyContent: 'space-evenly'
},
header: {

fontSize: 30,
fontWeight: 'bold',
width: '75%'
},
goodarea: {

margin: 30,
padding: 10,
borderColor: 'black',
borderRadius: 10,

},
emergency: {


borderWidth: 1,

borderColor: 'gray',
borderRadius: 10,

},

singleline: {
flexDirection: 'row',
justifyContent: 'space-between',
borderBottomWidth: 1,
borderBottomColor: 'black',
padding: 10,
},

inline: {
    flexDirection: 'row',
    marginTop:20,
    color: 'gray',
    marginBottom:20,
    justifyContent: 'space-between',
    fontWeight: 'bold',


},

imageBottomText: {

    fontSize: 30,

alignItems: 'center',
textAlign: 'center'
},

bottompos: {
    flex:1,
    bottom:0,
    left:0,
}

});
