import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import PrimeLogo from '../assets/prime-logo.png';
import {ProductData} from '../data/ProductData';
import {getRaid} from '../utils/helpers';

export default function ProductScreen() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Results</Text>
        <Text style={styles.tagline}>
          Price and other details may vary based on product aside and color.
        </Text>
        {ProductData.map(item => (
          <View key={item.id} style={styles.productSection}>
            <View style={styles.productImgSection}>
              <Image style={styles.productImg} source={item.image} />
            </View>
            <View style={styles.productDetailSection}>
              <Text style={styles.sponsored}>Sponsored</Text>
              <Text style={styles.productName}>{item.productName}</Text>
              <View style={styles.row}>
                <Text style={styles.rating}>{item.rating}</Text>
                {getRaid(item.rating)}
                <Text style={styles.ratingCount}>{item.ratingCount}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.price}>${item.price}</Text>
                <Text style={styles.crossOut}>${item.crossOutText}</Text>
              </View>
              <Text styl={styles.cashBack}>
                Up to %5 cashback with Amazon Pay Credit Card
              </Text>
              <Image source={PrimeLogo} style={styles.logo} />
              <Text style={styles.cashBack}>
                FREE Delivery {item.deliveryBy}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1b3b4f',
    textAlign: 'center',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 14,
    color: '#6d737b',
    marginBottom: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  productSection: {
    borderWidth: 2,
    borderColor: '#e0e6ed',
    flexDirection: 'row',
    borderRadius: 15,
    backgroundColor: '#ffffff',
    marginVertical: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  productImgSection: {
    width: '40%',
    backgroundColor: '#f7fafc',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    justifyContent: 'center',
    padding: 5,
  },
  productImg: {
    width: '100%',
    height: 160,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  productDetailSection: {
    width: '60%',
    padding: 15,
    justifyContent: 'space-between',
  },
  sponsored: {
    fontSize: 12,
    color: '#ff6d00',
    fontWeight: '700',
    marginBottom: 5,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    lineHeight: 22,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  rating: {
    fontSize: 14,
    color: '#ffb400',
    marginRight: 8,
  },
  ratingCount: {
    fontSize: 14,
    color: '#555555',
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2a9d8f',
    marginRight: 8,
  },
  crossOut: {
    fontSize: 14,
    color: '#a1a1a1',
    textDecorationLine: 'line-through',
  },
  cashBack: {
    fontSize: 12,
    color: '#2c2c2c',
    marginTop: 5,
  },
  logo: {
    height: 18,
    width: 50,
    marginVertical: 5,
  },
});
