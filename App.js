

// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text
// } from 'react-native';
// import CalendarList from 'react-native-calendar-list';

// const styles = StyleSheet.create({
//   container: {
//     flex: 0.5,
//     justifyContent: 'center',
//     //  alignItems: 'center'
//   },
// });

// const markStyle = { dayBackgroundColor: '#0065B8' };

// export default class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       marks: { },
//     };

//     this.dayPressed = this.dayPressed.bind(this);
//   }

//   dayPressed(date) {
    
//     var newMarks = { ...this.state.marks };
//     console.log(newMarks)
//     newMarks=[]
//     newMarks[date] = markStyle;
//     console.log("date " + date)
//     this.setState({ marks: newMarks, flag: false });
//     console.log(this.state.marks);

//   }

//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#fff' }}>

//         <View style={styles.container}>
//           {//!this.state.flag ?
//             <CalendarList
//               // Dates
//               startDate={'2017-02-01'}
//               monthsCount={300}
//               mondayWeekStart={false}
//               dayNames={['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa']}
//               monthNames={['January', 'February', 'March', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']}
//               // Selection
//               onDatePress={this.dayPressed}
//               marks={this.state.marks}
//               // Styling
//               showVerticalScrollIndicator
//               enableAutoScrollOnMonthPress
//               enableAutoScrollOnDayPress
//               enableFixVisualLinesArtifacts={true}
//               // Colors and Text Styling
//               dayBackgroundColor={'#fff'}
//               headerBackgroundColor={'#0065B8'}
//               weekHeaderBoxStyle={{ borderBottomWidth: 0.5, borderBottomColor: '#0065B8' }}
//               headerTextStyle={{ fontSize: 15, color: 'black' }}
//               weekHeaderTextStyle={{ fontSize: 14, color: '#000' }}
//               dayTextStyle={{ fontSize: 14 }}
//               // Performance
//               initialNumToRender={3}
//               rowHeight={40}
//               headerHeight={42}
//             />
//             //: null
//           }
//           <View style={{
//             justifyContent: 'space-between', backgroundColor: '#fff', alignItems: 'center',
//             borderBottomWidth: 1,
//             flexDirection: 'row', backgroundColor: '#fff',
//             padding: 10, marginLeft: 2, marginRight: 2,
//             borderTopWidth: 1
//           }}>
//             <Text style={{ fontSize: 16, fontWeight: 'bold', }} onPress={() => { this.setState({ flag: true }) }}> Cancel </Text>

//             <Text style={{ fontSize: 16, fontWeight: 'bold', }} onPress={() => { this.setState({ flag: true }) }}> Confirm </Text>

//           </View>

//         </View>
//       </View>
//     );
//   }
// }



// import React, { Component } from 'react';
// import {
//   Text,
//   StyleSheet,
//   ScrollView,
//   View
// } from 'react-native';
// import { Calendar, CalendarList } from 'react-native-calendars';


// const markStyle = { selected: true, marked: true };

// export default class App extends Component {



//   constructor(props) {
//     super(props);
//     this.state = {
//       selectDate: '',
//       marks: { },

//     };

//   }

//   render() {
//     const { selectDate } = this.state;
//     return (

//       <View style={{ backgroundColor: '#F5F5F5', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <View style={styles.container}>


//           <CalendarList
//             current={'2012-05-16'} pastScrollRange={200} futureScrollRange={200}
//             onDayPress={(day) => {
//               console.log('selected day', day),
//                 this.setState({ selectDate: day })
//             }}
//             markedDates={
//             //  this.state.marks
//               {
//               //'2012-05-23': { selected: true, marked: true },
//               '2012-05-25': { selected: true, dotColor: 'red'},
//               //'2012-05-25': { marked: true, dotColor: 'red' },
//              // '2012-05-26': { marked: true },
//             //  '2012-05-27': { disabled: true, activeOpacity: 0 },
//              // selectDate: { selected: true, marked: true },
//             //  [this.state.selectDate]: { selected: true, marked: true, dotColor: 'green' }
//             }
//           }

          
//             theme={{
//               backgroundColor: '#fff',
//               calendarBackground: '#fff',
//               textSectionTitleColor: 'red',
//               selectedDayBackgroundColor: 'green',
//               selectedDayTextColor: 'blue',
//               todayTextColor: 'yellow',
//               dayTextColor: '#2d4150',
//               textDisabledColor: 'green',
//               dotColor: '#00adf5',
//               selectedDotColor: '#ffffff',
//               arrowColor: 'orange',
//               monthTextColor: 'blue',
//               textMonthFontWeight: 'bold',
//               textDayFontSize: 16,
//               textMonthFontSize: 16,
//               textDayHeaderFontSize: 16
//             }}

//           />
//           <Text onPress={() => console.log('selected day', this.state.selectDate)} style={styles.text}>confirm</Text>
//           <Text onPress={() => console.log('selected day', this.state.selectDate)} style={styles.text}>cancel </Text>
//         </View>

//       </View>
//     );
//   }

//   // onDayPress(day) {
//   //   this.setState({
//   //     selected: day.dateString



//   //   });
//   // }


//   onDayPress(day) {
    
//     var newMarks = { ...this.state.marks };
//     console.log(newMarks)
//     newMarks=[]
//     newMarks[day] = markStyle;
//     console.log("date " + day)
//     this.setState({ marks: newMarks, flag: false });
//     console.log(this.state.marks);

//   }
// }

// const styles = StyleSheet.create({
//   calendar: {
//     borderTopWidth: 1,
//     paddingTop: 5,
//     borderBottomWidth: 1,
//     borderColor: '#eee',
//     height: 350
//   },
//   text: {
//     textAlign: 'center',
//     borderColor: '#bbb',
//     padding: 10,
//     backgroundColor: '#eee'
//   },
//   container: {

//     flex: .5,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5F5F5',

//     //margin: 25,
//     // marginTop: 200,
//     // marginBottom: 200
//   }
// });



import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { CalendarList } from 'react-native-calendars';
//import moment from 'moment';

export default class App extends Component {

  constructor(props) {
    super(props)
   // let getDay, nextDay;
   // getDay = moment();
   // nextDay = moment(new Date()).add(1,'days');
    this.state = {
      selectedDate: {},
      openCalender: true, 
    }
  }
  select(day) {
    const markedDay = { [day.dateString]: { selected: true, } }
    this.setState({ selectedDate: markedDay })
    console.log(this.state.selectedDate)
    //day.moment().format("YYYY-MM-DD")
    console.log(day)

  }

  render() {
    return (
      <View style={styles.container}>
        {/* <TouchableOpacity onPress={() => {
          this.setState({ openCalender: true }),
          console.log((this.state.selectedDate).dateString)
        }
        }>

          <TextInput
            pointerEvents="none"
            placeholder="select date"
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => {
              this.setState({ text })
              this.setState({ openCalender: true })
            }

            }
            onPress={() => {
              alert("true")
              this.setState({ openCalender: true })
            }}
            value={this.state.selectedDate}
          />
        </TouchableOpacity> */}


        {

          this.state.openCalender ?

            <View style={{
              flex: 0.5,
              justifyContent: 'center',
              //borderWidth : .5,
              marginLeft: 5,
              marginRight: 5,
              //padding: 5 ,
              position: 'relative'
            }}>

              <CalendarList
                onDayPress={this.select.bind(this)}
                minDate={Date.now()}
                current={Date.now()}
                pastScrollRange={300}
                futureScrollRange={300}
                markedDates={this.state.selectedDate}
                theme={{
                  backgroundColor: '#ffffff',
                  calendarBackground: '#ffffff',
                  textSectionTitleColor: '#b6c1cd',
                  selectedDayBackgroundColor: '#00adf5',
                  selectedDayTextColor: '#ffffff',
                  todayTextColor: '#00adf5',
                  dayTextColor: '#2d4150',
                  textDisabledColor: '#d9e1e8',
                  dotColor: '#00adf5',
                  selectedDotColor: '#ffffff',
                  arrowColor: 'orange',
                  textMonthFontWeight: 'bold',
                  textDayFontSize: 16,
                  textMonthFontSize: 16,
                  textDayHeaderFontSize: 16
                }}
              />
            </View>
            : null}
        {this.state.openCalender ? <View style={{
          flexDirection: 'row', justifyContent: 'space-between',
          // marginLeft: 15 ,
          padding: 10,
          marginLeft: 5,
          marginRight: 5,
          borderTopWidth: .5,
          borderBottomWidth: .5,
          //borderLeftWidth: .5,
          //borderRightWidth: .5,
          backgroundColor: '#fff'
        }}>

          <Text onPress={() => { this.setState({ openCalender: false }) }} style={{ fontSize: 16, color: '#00adf5' }}>
            Cancel
            </Text>
          <Text onPress={() => { this.setState({ openCalender: false }) }} style={{ fontSize: 16, color: '#00adf5' }}>
            Confirm
          </Text>
        </View> : null}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //   alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

