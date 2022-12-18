import {useEffect, useState} from 'react';
import {decode as atob, encode as btoa} from 'base-64';
import SendSMS from 'react-native-sms';

import SmsAndroid from 'react-native-get-sms-android';
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  NativeModules,
  PermissionsAndroid,
  Modal,
  Switch,
  ActivityIndicator,
} from 'react-native';
export default function SosPlanning({navigation}) {
//   var DirectSms = NativeModules.DirectSms;
  const [smsToggle, setsmsToggle] = useState(true);
  const [whatsappToggle, setWhatsappToggle] = useState(true);
  const [globalToggle, setGlobalToggle] = useState(true);
  //send api request
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
        sms: smsToggle,
        whatsapp: whatsappToggle,
        global: globalToggle

    })
};

const postExample = async () => {
    try {
        await fetch(
            'https://eom3ts4uli8emk0.m.pipedream.net', requestOptions)
            .then(response => {
                
                // setModalVisible(true);
                console.log(response);
                //alert
                alert("Your configuration has been saved successfully");
                navigation.navigate('Dashboard');
               

            })
    }
    catch (error) {
        console.error(error);
    }
}
  return (
    <>
      <View style={styles.test}>
        <Text style={styles.header}>Setup workflow to alert emergency contacts...</Text>
        <View style={{flexDirection:'row', justifyContent: 'space-between', marginTop:30}}>
            <Text style={styles.workflowText}>Send SMS </Text>
            <Switch value={smsToggle} onValueChange={setsmsToggle} />

        </View>
        <View style={{flexDirection:'row', justifyContent: 'space-between', marginTop:30}}>
            <Text style={styles.workflowText}>Send Whatsapp Message </Text>
            <Switch value={whatsappToggle} onValueChange={setWhatsappToggle} />

        </View>
        <View style={{flexDirection:'row', justifyContent: 'space-between', marginTop:30}}>
            <Text style={styles.workflowText}>Send Globally </Text>
            <Switch value={globalToggle} onValueChange={setGlobalToggle} />

        </View>
        <View style={{flexDirection:'row', justifyContent: 'space-between', marginTop:30}}>
            <Text style={styles.workflowText}>Enable Offline Alerting </Text>
            <Switch value={globalToggle} onValueChange={setGlobalToggle} />

        </View>
         </View>
         <Pressable onPress={postExample}>
        <View style={styles.viewbtn}>
          <Text style={styles.whiteText}>Save your configuration</Text>

        </View>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  test: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  viewbtn: {
    //maersk colour
    backgroundColor: '#003366',
    color: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },

  whiteText: {
    color: 'white',
    fontSize: 20,
    },

    header: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    workflowText: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});
