import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  NativeModules,
  Pressable,
  FlatList,
  SafeAreaView,
  ScrollView,
  Platform
} from 'react-native';
var DirectSms = NativeModules.DirectSms;
import {decode as atob, encode as btoa} from 'base-64';
// import * as SMS from 'expo-sms';
// fix not scrolling

import {PermissionsAndroid} from 'react-native';
import { useEffect, useState } from 'react';
import Header from './header';
export default function Dashboard({navigation}) {

  const [contacts, setContacts] = useState([]);


  const getData = async () => {
    try {
        await fetch('https://anonpe.com/womensafes/getData.php')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setContacts(json);
                
            })
    }   
    catch (error) {
        console.error(error);
    }
}

useEffect(() => {
    setInterval(() => {
        getData();
    }, 10000);

}, []);
  const sendsms = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.SEND_SMS,
        {
          title: 'YourProject App Sms Permission',
          message:
            'YourProject App needs access to your inbox ' +
            'so you can send messages in background.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        DirectSms.sendDirectSms('+12496995223', btoa('{"equipment":"test","reqtype":"test","location":"test"}'));
      } else {
        console.log('SMS permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Header />
        <View style={styles.center}> 
        <Pressable style={styles.alertbtn} onPress={sendsms}>
        <Text style={styles.white}>Send SOS</Text>
        </Pressable>

        </View>
     <View>
        <Text style={styles.header}>Dashboard</Text>
        
     </View>
        <View style={styles.tiles}>

            <Pressable onPress={() => navigation.push('SosPlanning')}>
            <View style={styles.btn} >
            <Text style={styles.tileText}>SOS</Text>
            </View>
            </Pressable>
            <View style={styles.btn}>
            <Text style={styles.tileText} onPress={() => navigation.push('AddContacts')}>Add Contacts</Text>
            </View>
        </View>
        <View style={styles.tiles}>

            
<View style={styles.btn} onPress={() => navigation.push('Capability')}>
<Text style={styles.tileText}>Helpline Numbers</Text>
</View>
<View style={styles.btn}>
<Text style={styles.tileText} onPress={()=> navigation.push('NearbySOS')}>Nearby SOS</Text>
</View>
</View>



    <View style={styles.emergency}>
        <Text style={styles.header}>Added Emergency Contacts</Text>
        <Text style={styles.number}>{contacts.length}</Text>
    </View>

    <ScrollView style={styles.goodarea}>
    {contacts.map((contact, key) => {
        return (
   
        
            <View key={key} style={styles.singleline}>
                <Text style={styles.white} key={key}>{key+1}.   {contact.name}</Text>
                <Text style={styles.white} key={key+1000}>{contact.phone} </Text>
            </View>
        )}
    )}
    </ScrollView>

        {/* <Button title="Send SMS" onPress={sendsms}/> */}
      </View>
    </>
  );
}
const styles = StyleSheet.create({

  center: {

    justifyContent: 'center',
    alignItems: 'center',
  },
  alertbtn: {
    backgroundColor: '#EB6440',
    width: 100,
    height: 100,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

  sendsos:{

    width:"100%",
     backgroundColor:'red'

  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    color: 'white',
  },
  TextInput: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
  },
  tiles: {
    flexDirection: 'row',
     marginLeft: 20,
      justifyContent: 'space-evenly'
    },
  button: {
    backgroundColor: 'red',
  },
  btn: {
    backgroundColor: '#0014FF',
    width: 150,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    },
    tileText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    goodarea: {
      margin: 10,
      backgroundColor: '#0014FF',
      padding: 10,
      borderColor: 'black',
      borderRadius: 10,
      
      },

      singleline: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
        
        padding: 10,
        color: '#ffffff',
        margin:10,
       
        borderRadius: 13,
        },
        emergency: {
       
          
          
          borderRadius: 20,
          margin: 20,
        },

        white: {
          color: '#ffffff',
          fontSize: 20,
          fontWeight: 'bold',
        },

        header:  {
          fontSize: 30,
          color: 'black',
          padding: 20

        },

        number: {
          marginLeft:20,
          fontSize: 30,
          color: '#246EE9',
          fontWeight: 'bold',


        }
});
