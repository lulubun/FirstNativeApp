import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, PanResponder, Button, FlatList, ScrollView } from 'react-native';
import { Checkbox } from 'react-native-material-design';

export default class List extends Component {
  constructor(props){
    super(props);
    this.state={
      daily: ['wipe kitchen counters', 'wipe bathroom counters', 'load dishwasher'],

      weekly: ['kitchen: clean sink', 'bathroom: clean sink & mirrors', 'bathroom: clean toilet',
      'kitchen: deep clean counters', 'living room: mop wood floors/tidy papers',
      'bedrooms: change sheets - fold ex laundry', 'kitchen: clean oven range/water plants'],

      monthly: ['dust bookshelves', 'change air filter', 'livingroom: dust side table',
      'wipe hallway baseboards', 'livingroom: dust tv', 'livingroom: wipe doors', 'wipe baseboards',
      'wash sofa blankets', 'bedroom: dust one bookshelf', 'bedroom: wipe doors', 'bedroom: dust one bookshelf',
      'bedroom: dust bedside table', 'bedroom: take out trash', 'wash duvet', 'bedroom: wash dog beds',
      'Maeve\'s room: dust bookshelf', 'backroom: dust dresser', 'backroom: dust bookshelf',
      'backroom: dust bookshelf', 'kitchen: clean out freezer', 'kitchen: clean out fridge',
      'kitchen: wipe out trash area under sink', 'kitchen: clean dishwasher filter', 'kitchen: clean oven',
      'kitchen: put vinegar & baking soda down drain', 'kitchen: wash dog beds', 'kitchen: wash water pitchers',
      'bathroom: wash shower curtains', 'bathroom: put vinegar & baking soda down drain',
      'bathroom: wash tub mat', 'outside: sweep off front porch'],
      // dragging: false,
      // initialTop: 50,
      // initialLeft: 0,
      // offsetTop: 10,
      // offsetLeft: 0,
    }
  }

  // panResponder = {}
  //
  // componentWillMount() {
  //   this.panResponder = PanResponder.create({
  //     onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
  //     onPanResponderGrant: this.handlePanResponderGrant,
  //     onPanResponderMove: this.handlePanResponderMove,
  //     onPanResponderRelease: this.handlePanResponderEnd,
  //     onPanResponderTerminate: this.handlePanResponderEnd,
  //   })
  // }

  render() {
    // const {dragging, initialTop, initialLeft, offsetTop, offsetLeft} = this.state
    //
    // // Update style with the state of the drag thus far
    // const style = {
    //   backgroundColor: dragging ? 'skyblue' : 'steelblue',
    //   left: initialLeft + offsetLeft,
    // }

    let task1 = this.state.daily[0];
    let task2 = this.state.weekly[0];
    let task3 = this.state.monthly[0];

    return(
      <View style={{marginTop: 50}}>
        <ScrollView>
          <View style={styles.container}>
            <Checkbox label={task1} value='firstTask' checked={false} onCheck={() => {console.log('checked 1!'); checked=true}}/>
            <Checkbox label={task2} value='secondTask' onCheck={() => {console.log('checked! 2'); checked=true}}/>
            <Checkbox label={task3} value='thirdTask' onCheck={() => {console.log('checked 3!'); checked=true}}/>

            {/* <View
            // Put all panHandlers into the View's props

              {...this.panResponder.panHandlers}
              style={[styles.square, style]}
            >
            </View>
            <View
            // Put all panHandlers into the View's props
              {...this.panResponder.panHandlers}
              style={[styles.square, style]}
            >
            </View>
            <View
            // Put all panHandlers into the View's props
              {...this.panResponder.panHandlers}
              style={[styles.square, style]}
            >
            </View> */}
          </View>
        </ScrollView>
      </View>
    )
  }
  //
  // // Should we become active when the user presses down on the square?
  // handleStartShouldSetPanResponder = (e, gestureState) => {
  // return true
  // }
  //
  // // We were granted responder status! Let's update the UI
  // handlePanResponderGrant = (e, gestureState) => {
  // this.setState({dragging: true})
  // }
  //
  // // Every time the touch/mouse moves
  // handlePanResponderMove = (e, gestureState) => {
  //
  //   // Keep track of how far we've moved in total (dx and dy)
  //   this.setState({
  //     offsetLeft: gestureState.dx,
  //   })
  // }
  //
  // // When the touch/mouse is lifted
  // handlePanResponderEnd = (e, gestureState) => {
  // const {initialTop, initialLeft} = this.state
  //
  //   // The drag is finished. Set the initialTop and initialLeft so that
  //   // the new position sticks. Reset offsetTop and offsetLeft for the next drag.
  //   this.setState({
  //     dragging: false,
  //     initialLeft: initialLeft + gestureState.dx,
  //     offsetTop: 0,
  //     offsetLeft: 0,
  //   })
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  square: {
    height: 30,
    alignItems: 'stretch',
    paddingTop: 5,
    marginTop: 8
  },
  text: {
    paddingLeft: 70,
    // color: 'white',
    fontSize: 12,
    textAlign: 'justify'
  }
})
