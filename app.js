import { StyleSheet, View } from 'react-native';

import { AppLoading } from 'expo';
import Header  from './components/Header';
import Home from './screen/Home';
import Inicio from './screen/Inicio';
import React from 'react';
import Receta from './screen/Receta';
import { StatusBar } from 'expo-status-bar';
import {useFonts} from 'expo-font';
import { useState } from 'react';

// const fetchFonts = () =>{
//   return Font.loadAsync({
//     'NotoSans-bold' : require ('../assets/font/NotoSansJP-Bold.otf'),
//     'NotoSans-Regular': require ('../assets/font/NotoSansJP-Regular.otf')
//    });
//   };
   
export default function App() {
  
  const[userName, setUserName] =useState()

  let content =<Inicio onInicio={setUserName}/>
  if(userName) {
    content= <Home/>
  }
 
  const [dataLoaded] = useFonts({
    'NotoSansJP': require('./assets/fonts/NotoSansJP-Regular.otf'),
    'NotoSansJP-bold': require('./assets/fonts/NotoSansJP-Bold.otf'),
  })
 if(!dataLoaded) {
  return <AppLoading/>
  }
  return (
    <View style={styles.container}>
      <Header title="PIZZAPP"  />
      {content}
      <Receta   />
      <Home />
      

       <StatusBar style="light" 
                 backgroundColor= 'black' />
                  
    </View>
  );
  };
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    fontFamily:'NotoSansJP-bold',
    
  },
   fondo: {
   width: '100%',
   height: '100%',
  },
});
