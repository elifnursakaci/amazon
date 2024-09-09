import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function SubHeader() {
  return (
    <View>
      <LinearGradient
        style={styles.container}
        colors={['#bbe8ef', '#bdeee9', '#c3f1e3']}>
        <Feather name="map-pin" size={16} colors="#000" />
        <Text style={styles.deliver}>Deliver to Turkey - 1234567</Text>
        <SimpleLineIcons name="arrow-down" size={10} colors="#000" />
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bbe8ef',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  deliver: {
    fontSize: 14,
    color: '#1b3a41',
    paddingHorizontal: 8,
    fontWeight: '600',
  },
});
