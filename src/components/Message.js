import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import { Title, Divider, Text } from 'react-native-paper';




const Message = (props) => {


  
    
    return (

        
      <View style={styles.container}>

        <View style={styles.remitente}>
        <Text>RMS</Text>
        </View>

        <View style={styles.asunto}>
            <Text>Solicitud de credito aprovada. Gracias.</Text>
        </View>
        
      </View>
        
        



    );
  
}

export default Message;

const styles = StyleSheet.create({
    container: {
      
      flex: 1,
      alignItems: "center", 
      justifyContent: "center", 
      flexDirection: "row"
    },
    remitente: {
        
        width: 40,
        height: 40,
        marginRight:10,
        borderRadius: 50,
        borderWidth: 3,
        alignItems: "center", 
        justifyContent: "center",
      },
    asunto: {
        fontSize: 15,
        width: 300,
        height: 40,
        margin: 4,
        alignItems: "center", 
        justifyContent: "center",
    },
  });