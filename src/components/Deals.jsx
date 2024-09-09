import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import RecommendProduct from '../assets/recommend.jpg';

export default function Deals() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended deal for you</Text>
      <Image source={RecommendProduct} style={styles.imgStyle} />
      <View style={styles.bottomSection}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.offDealBtn}>
            <Text style={styles.offDeal}>%18 off</Text>
          </TouchableOpacity>
          <Text style={styles.deal}>Deal</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.discountPrice}>$ 1,5999</Text>
          <Text style={styles.actualPrice}>$ 1,900</Text>
        </View>
        <Text style={styles.productName}>
          Nykaa Fave Wash Gentle Skin Cleanser for all skin type
        </Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.allDeals}>See all deals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 20,
    backgroundColor: '#f7f7f7',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  imgStyle: {
    width: '100%',
    height: 220,
    borderRadius: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    paddingHorizontal: 10,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  offDealBtn: {
    backgroundColor: '#ff5a5f',
    width: 80,
    padding: 6,
    borderRadius: 5,
    alignItems: 'center',
  },
  offDeal: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  deal: {
    color: '#ff5a5f',
    fontWeight: '700',
    marginLeft: 8,
    fontSize: 16,
  },
  discountPrice: {
    color: '#000000',
    fontSize: 18,
    marginVertical: 5,
    fontWeight: 'bold',
  },
  actualPrice: {
    fontSize: 12,
    marginLeft: 8,
    textDecorationLine: 'line-through',
    color: '#999',
  },
  productName: {
    color: '#333',
    fontSize: 16,
    marginTop: 8,
  },
  allDeals: {
    color: '#017185',
    marginVertical: 12,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
