import * as React from 'react';
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image,Text, View, Pressable, TouchableOpacity} from 'react-native';
import ModalComponent from './Components/ModalComponent';





export default function App() {

  const [modalVisible, setModalVisible] = useState(false)

 
/*
 setTimeout(() => {
  setModalVisible(true)
 }, 3000);

  console.log(modalVisible)
  */

  return (
  <View  style= {styles.contenedorprincipal}>
      <View style={styles.contenedor2}>
        <Text style={styles.titulo} > Alimentadores</Text>
      </View>

   <View style={styles.contenedor}>
      <Pressable
      style={styles.boton}
      onPress={() => setModalVisible(true)}
      
      >
      <Text style={styles.textoBoton}>Agregar alimentador</Text>
      </Pressable>    

    <ModalComponent
    
    
    modalVisible = {modalVisible}
    setModalVisible = {setModalVisible}
    
    />
       
    </View>
    
      
    

      
 
 </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
   textAlign :'left',
   fontSize : 30,
   fontWeight : '600',
  },
  contenedorprincipal: {
    flex: 1
  },

  contenedor: {
  backgroundColor: 'lavender',   
  flex: 1,
  justifyContent: 'flex-end'
  
  },

  contenedor2: {
    backgroundColor: 'seashell',   
   justifyContent: 'flex-start'
    
    
  
  },

  boton: {
    backgroundColor: 'orange',
    padding: 6,
    marginBottom: 5 ,
    marginHorizontal: 10,
    borderRadius: 4,
    justifyContent: 'flex-end'
  },

  textoBoton: {
      textAlign: 'center',
      color : 'white',
  } 
  
 

});
