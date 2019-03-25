// import React, { Component } from "react";
// import { Text, TouchableOpacity, View , StyleSheet} from "react-native";
// import DateTimePicker from "react-native-modal-datetime-picker";

// export default class DateTimePickerTester extends Component {
//   state = {
//     isDateTimePickerVisible: false,
//     selectedDate: ""
//   };

//   _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

//   _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

//   _handleDatePicked = date => {
//     console.log("date", date)
//     this.setState({ selectedDate: date.toString() });
//     this._hideDateTimePicker();
//   };

//   render() {
//     const { isDateTimePickerVisible, selectedDate } = this.state;

//     return (
//       <View style={styles.container}>
//         <TouchableOpacity onPress={this._showDateTimePicker}>
//           <View style={styles.button}>
//             <Text>Show DatePicker</Text>
//           </View>
//         </TouchableOpacity>

//         <Text style={styles.text}>{selectedDate}</Text>

//         <DateTimePicker
//           isVisible={isDateTimePickerVisible}
//           onConfirm={this._handleDatePicked}
//           onCancel={this._hideDateTimePicker}
//         />
//       </View>
//     );
//   }
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   button: {
//     backgroundColor: "lightblue",
//     padding: 12,
//     margin: 16,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 4,
//     borderColor: "rgba(0, 0, 0, 0.1)"
//   },
//   text: {
//     marginVertical: 10
//   }
// });



// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
// } from 'react-native';

// import DatePicker from 'react-native-date-picker';
// import moment from 'moment';
// import DeviceInfo from 'react-native-device-info';

// export default class DatePickerTimePickerDialog extends Component {

//   state = { birthDate: new Date() }
//   select(day) {
//     const test = moment(day, 'YYYY-MM-DD').format('YYYY-MM-DD')
//     console.log("day " , test)
// }
//   render() {
//     const readableVersion = DeviceInfo.getReadableVersion();
//     const version = DeviceInfo.getVersion();
//     console.log("version " , version)

//     console.log("readableVersion " , readableVersion)
//     return (
//       <View style={styles.container}>

//         <DatePicker
//           date={this.state.birthDate}
//           //onDateChange={date => this.setState({ date })}
//           mode={'date'}
//           onDateChange={this.select.bind(this)}
//           maximumDate={this.state.birthDate}
//         />

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     //padding: 10,
//     backgroundColor: '#FFFFFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   content: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   datePickerBox: {
//     marginTop: 9,
//     borderColor: '#ABABAB',
//     borderWidth: 0.5,
//     padding: 0,
//     borderTopLeftRadius: 4,
//     borderTopRightRadius: 4,
//     borderBottomLeftRadius: 4,
//     borderBottomRightRadius: 4,
//     height: 38,
//     justifyContent: 'center'
//   },
//   datePickerText: {
//     fontSize: 14,
//     marginLeft: 5,
//     borderWidth: 0,
//     color: '#121212',
//   },
// });



import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import codePush from "react-native-code-push";

export default class DatePickerTimePickerDialog extends Component {

  onButtonPress() {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    });
  }
  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.content}>Test Code Push</Text>
        <TouchableOpacity onPress={this.onButtonPress}>
          <Text>Check For New Version Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});