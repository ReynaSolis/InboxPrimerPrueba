import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import { Title, Divider, Text } from 'react-native-paper';

import Message from './Message';
import Date from './Date';


export default class MessageList extends React.Component {


  render() {

    return (

        
        <View>
          
          <Date />
          <Message />
          
        </View>



    );
  }
}