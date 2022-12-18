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
export default function NearbySOS({navigation}) {
//   var DirectSms = NativeModules.DirectSms;
  const [smsToggle, setsmsToggle] = useState(true);
  const [whatsappToggle, setWhatsappToggle] = useState(true);
  const [globalToggle, setGlobalToggle] = useState(true);
  //send api request
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
};
    const [alldata, setAlldata] = useState([]);
const getExample = () => {
    fetch('https://anonpe.com/womensafes/getglobaldata.php', requestOptions)
        .then(response => response.json())
        .then(data => {
            setAlldata(data);
            console.log(alldata);
        }
        );
}

useEffect(() => {
    getExample();
}, []);

  return (
    <>
      <View style={styles.test}>

        <Text style={styles.header}>Can you help for your nearby SOS?</Text>

        
      {alldata.map((onedata, key) => {
        return (
   
            <View  key={key} style={{flexDirection:'column', justifyContent: 'space-between', marginTop:30, backgroundColor: 'lightyellow', paddingBottom: 20}}>
                <Text style={styles.workflowText} key={key}>{key+1}.   {onedata.phone}</Text>

                <Text style={styles.cdx} key={key+1000}>{onedata.location} </Text>
                <Text style={styles.cdx} key={key+2000}>{onedata.date_time} </Text>
            </View>
        )}
    )}
         </View>
         {/* <Pressable onPress={getExample}>
        <View style={styles.viewbtn}>
          <Text style={styles.whiteText}>Save your configuration</Text>

        </View>
      </Pressable> */}
    </>
  );
}

const styles = StyleSheet.create({
    cdx: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'lightblue',
        borderRadius: 10,
        color: 'black',
        padding: 10,
        margin: 10,
    },
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
        backgroundColor: '#003366',
        borderRadius: 10,
        color: 'white',
        padding: 10,
    }
});
