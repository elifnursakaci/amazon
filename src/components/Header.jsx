import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

export default function Header() {
  return (
    <View>
      <LinearGradient
        style={styles.container}
        colors={['#88dae0', '#98e1d6', '#9ee4d4']}>
        <View style={styles.inputBox}>
          <View style={styles.row}>
            <Ionicons name="search" size={22} colors="#1f1f1f" />
            <TextInput
              placeholder="Search Amazon"
              placeholderTextColor={'#848484'}
              style={styles.textInput}
            />
          </View>
          <AntDesign name="scan1" size={22} colors="#909594" />
        </View>
        <Feather name="mic" size={22} colors="#000" />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1fa5a9',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#5db9b3',
    borderWidth: 1,
    width: '85%',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    padding: 10,
    color: '#333',
  },
});
