import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function ServicesCard({item}) {
  return (
    <View>
      <View style={styles.outerContainer}>
        <Text style={styles.recentSerach}>item.title</Text>
        <Image source={item.image} style={styles.serviceImg} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#fefefe',
    marginLeft: 12,
    width: 150,
    padding: 10,
    borderRadius: 12,
    shadowColor: '#bbb',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  recentSerach: {
    fontSize: 14,
    color: '#2c4341',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  serviceImg: {
    width: '100%',
    height: 140,
    borderRadius: 8,
  },
});
