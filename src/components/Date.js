import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import { Title, Divider, Text } from 'react-native-paper';




export default class Date extends React.Component {


  render() {
    
    return (

        
      <View style={styles.container}>

        <View style={styles.fecha}>
            <Text style={styles.tipo}>Fecha</Text>
        </View>

      
      </View>
        
        



    );
  }
}

const styles = StyleSheet.create({
    container: {
      
      flex: 1,
      flexDirection: "column"
    },
    fecha: {
      marginRight:20,
      marginTop:20,
      alignSelf: 'flex-end',
      
    },
    tipo: {
      fontWeight:'bold',
      fontSize: 15,
      
    },
   
  });