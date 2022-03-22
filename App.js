import * as React from 'react';
import { View, Image, StyleSheet} from 'react-native';
import { Title, Divider, Text, Searchbar } from 'react-native-paper';


import MessageList from './src/components/MessageList';

export default class App extends React.Component {
  
  //ejemplo base de datos
  /*
  state = {
    messages: [
      {
        "id": 1,
        "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
        "read": false,
        "starred": true,
        "labels": ["dev", "personal"]
      },
      {
        "id": 2,
        "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
        "read": false,
        "starred": false,
        "selected": true,
        "labels": []
      },
      {
        "id": 3,
        "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
        "read": false,
        "starred": true,
        "labels": ["dev"]
      },
      {
        "id": 4,
        "subject": "We need to program the primary TCP hard drive!",
        "read": true,
        "starred": false,
        "selected": true,
        "labels": []
      },
      {
        "id": 5,
        "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
        "read": false,
        "starred": false,
        "labels": ["personal"]
      },
      {
        "id": 6,
        "subject": "We need to back up the wireless GB driver!",
        "read": true,
        "starred": true,
        "labels": []
      },
      {
        "id": 7,
        "subject": "We need to index the mobile PCI bus!",
        "read": true,
        "starred": false,
        "labels": ["dev", "personal"]
      },
      {
        "id": 8,
        "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
        "read": true,
        "starred": true,
        "labels": []
      }
    ] 
  }
  
*/


  //search
  state = {
    firstQuery: '',
  };



  render() {
    const { firstQuery } = this.state;
    
    return (

        
        <View style={styles.container}>

        <View style={styles.header}>
        
        <Title style={styles.title}>Bienvenido a tu Inbox "Nombre de Usuario"</Title>
        <Searchbar style={styles.search}
        placeholder="Search" 
        onChangeText={query => { this.setState({ firstQuery: query }); }}
        value={firstQuery}
        />
        </View>

        <View>
          <MessageList />
        </View>

        <View style={styles.footer}>
        <Image
        style={styles.msn}
        source={require('./src/assets/img/msn.png')}
        />
        </View>
        </View>

        
        


    );
  }
}

const styles = StyleSheet.create({
  
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight:'bold',
    fontSize: 15,
  },
  search: {
    width:320,
    height: 40,
    borderWidth: 0.3,
  },
  footer: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 3,
    position: 'fixed',
    bottom: 0,
    left:0,
    right:0
    
  },
  msn: {
    width: 30,
    height: 30,
    
  },
});