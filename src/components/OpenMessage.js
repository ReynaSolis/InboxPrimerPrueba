import * as React from 'react';
import { View, Image, StyleSheet} from 'react-native';
import { Title, Divider, Text, Searchbar } from 'react-native-paper';


import MessageList from './src/components/MessageList';

export default class App extends React.Component {


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
          <Text>
              sdffjhgterwwerthyjugrfesdffgtfrfd
          </Text>

          <a href=''>Enviar mi documentacion</a>
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