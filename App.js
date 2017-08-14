import React, { Component } from 'react';
import ImageBox from './app/components/ImageBox';
import { StyleSheet, Text, View, Image, PanResponder, Button, FlatList, ScrollView } from 'react-native';

export default class HelloWorldApp extends Component {

  render() {
    return (
      <View>
        <ImageBox />
      </View>
    )
  }
}
