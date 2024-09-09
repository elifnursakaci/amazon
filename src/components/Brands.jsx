import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Brand1 from '../assets/brand1.jpeg';
import Brand2 from '../assets/brand2.jpeg';
import Brand3 from '../assets/brand3.jpeg';
import Brand4 from '../assets/brand4.jpeg';

export default function Brands() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Brands of Day</Text>
        <View style={styles.row}>
          <View style={styles.brands}>
            <Image style={styles.imgStyle} source={Brand1} />
            <Text style={styles.brandTitle}>
              Min. 20% off | Jewelry , Titan
            </Text>
          </View>
          <View style={styles.brands}>
            <Image style={styles.imgStyle} source={Brand2} />
            <Text style={styles.brandTitle}>
              Min. 40% off | Fossil , Titan Smart Watch & More
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.brands}>
            <Image style={styles.imgStyle} source={Brand3} />
            <Text style={styles.brandTitle}>
              Heels - Upto 20% off | Sandals, High Heel
            </Text>
          </View>
          <View style={styles.brands}>
            <Image style={styles.imgStyle} source={Brand4} />
            <Text style={styles.brandTitle}>
              Sony 60W Bluetooth Soundbar Speaker
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#f4f4f4',
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#aaa',
  },
  innerContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  title: {
    fontSize: 22,
    color: '#333333',
    padding: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  brands: {
    width: '48%',
    backgroundColor: '#ebf0f7',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#aaa',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  brandTitle: {
    color: '#555555',
    fontSize: 14,
    marginTop: 8,
    fontWeight: '600',
    textAlign: 'center',
  },
  imgStyle: {
    height: 120,
    width: '100%',
    borderRadius: 8,
    marginBottom: 10,
  },
});
