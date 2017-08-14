import React, { Component } from 'react';
import List from './List';
import { StyleSheet, Text, View, Image, PanResponder, Button, FlatList, ScrollView } from 'react-native';

export default class ImageBox extends Component {
  render() {
    return(
      <View>
        <Text style={{textAlign: 'center', color: '#4F7CAC', fontSize: 30, marginTop: 50}}>Clean Routine</Text>
        <List />
        <View style={{paddingTop: 50}}>
          <Text style={{fontSize: 10, textAlign: 'center'}}>Swipe right to mark a task done for the day!</Text>
        </View>
      </View>
    )
  }
}
