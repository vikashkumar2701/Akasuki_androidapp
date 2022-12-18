import { useEffect } from 'react';
import {View, ImageBackground, StyleSheet, StatusBar } from 'react-native';
export default function Header() {
    useEffect(() => {

    StatusBar.setHidden(true, 'none');
    }, []);
    return (
        <>
         <View style={styles.banner}>
        <ImageBackground source={require('./women_saf.png')}   resizeMode="cover" style={styles.image}>
      
    </ImageBackground>
        </View>
        </>
    );
    }

    const styles = StyleSheet.create({
        banner:{

            height: 150,
            padding: 10,
            width: '100%',
            opacity: 0.8,
    
        },
        image: {
            flex: 1,
            justifyContent: "center",
            backgroundColor: "#ffffff",
            padding: 10,
            margin: 2
        },

    });
