import React, {useState} from 'react'
import {Modal, Text, View, AlertButton, alert ,StyleSheet, Button,Image, Pressable, TextInput} from 'react-native'

const ModalComponent = (props) => {

const {modalVisible, setModalVisible} = props
const[palabraAgregada, setPalabraAgregada] = useState('')
const[Guardar, setGuardar] = useState('')
////////// PETICIONES

const validar = () => {

  if(palabraAgregada != ''){
            console.log('palabraAgregada', palabraAgregada)
try {
  let controller = new AbortController();
  setTimeout(() => controller.abort(), 11000); //timeout 11 seg
fetch(`localhost/php/Agregar.php`, {
  method: 'POST',
  headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  },
  signal: controller.signal,
  body: JSON.stringify({
  macalimentador: palabraAgregada,
  })
  }).then((response) => response.json())
  .then((responseJson) => {
    console.log("res", responseJson)
  if (responseJson == "Error") {
  } else {
  }
  })
  .catch((error) => {
  console.log('errorrrrrrrrrrrrrr')
  })
  } catch (error) {
  console.error(error);
  }
  }else{

  }



}

  /////////////


  return (

      <Modal  
          transparent visible={modalVisible} 
          animationType= 'slide'  
       //   visible ={props.setModalVisible}
          >
<View style={styles.contenedor}>
  <View style={styles.principal}>
        <View style={styles.contenedorHeader}>
             <Text style={styles.contenedorHeader}>Nuevo alimentador</Text>
             <Pressable style= { styles.contenedorBoton}
             onPress={() => setModalVisible(false)}
            
            
             >
                <Text style= { styles.textoBotonCon}>Cancelar</Text>
              </Pressable>
        </View>

        <View> 
              <View style={styles.contenedorImagen}>
               <Image
        style={styles.imagenDiseño}
        //source={{ uri: "https://reactjs.org/logo-og.png" }}
          source={require('../assets/foto.png')}
          />
              </View>
               <Text style={styles.cuerpoTexto}>Ingrese el código del alimentador para vincularse</Text>

              
              <TextInput  
              
               style={styles.inputDiseño}
               placeholder='xxxxxxxx' 
              value={palabraAgregada}   
              
           //   onChangeText={setPalabraAgregada.}
           onChangeText={(value) => {   

            setPalabraAgregada(value.replace(/[^0-9A-F]/g,''))
           }}

              maxLength ={8}

           
       //       disabled={disable} 
              //pattern="[0-9A-F]"
              //^[0-9A-F]+$
               />
               <Button 
                onPress={validar}
               // disabled={true}
               title= 'Guardar'
                style={styles.botonGuardar} 

                ></Button>
               

        </View>
   </View>
</View>         
          
      </Modal>
    


  )
}



const styles = StyleSheet.create({
contenedor: {
 // marginTop: 500,
 
 // alignSelf: 'center',
  //justifyContent: 'center',
  //flexDirection:'column',
 // flexDirection: '',
 
 //alignSelf: 'center',
flex: 1,

 alignSelf: 'center',
 justifyContent: 'center',
 textAlign: 'center',
 
 //alignContent: 'flex-end',
 
 
  
  //alignSelf: 'center',
 // width: 100,
  //height:100,
  //margin: 100,
  //borderRadius: 10,
  //padding: 10,
 // display
}, 
principal: {
  width: '100%',
  backgroundColor: 'white',
  //paddingHorizontal: 30,
  //paddingVertical: 30,
  borderRadius: 10,
  paddingLeft: 10,
  paddingRight: 10

},
contenedorHeader: {
  backgroundColor: 'white',
  flexDirection: 'row',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  fontSize: 15,
  fontWeight: '600',
  textAlign: 'right',
 padding: 5,
  
},

textoBotonCon:{
  color: 'orange',
  fontSize: 15,
  textAlign: 'left'
},

cuerpoTexto:{
  marginTop: 30,
  fontSize: 15,
},

inputDiseño:{
  textAlign: 'center',
  marginTop: 30, 
  textTransform : 'uppercase'
}, 

botonGuardar:{
  marginTop: 100,
  backgroundColor: 'orange',
  borderRadius: 5,
  marginBottom: 10,
  marginHorizontal: 100,
  marginVertical: 100,
  padding: 5,
  
},

textoGuardar: {
  fontSize: 15,
  color: 'white'
},
imagenDiseño:{
width: 100,
height: 100,

  alignItems:'center'
}, 
contenedorImagen: {
  flex: 1,
  marginTop: 30,
  alignItems: 'center',
 
}

})


export default ModalComponent
