import {
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {Categories} from '../data/Categories';
import {useNavigation} from '@react-navigation/native';

export default function Category() {
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      {Categories.map(item => (
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductScreen')}
          key={item.id}
          style={styles.category}>
          <Image style={styles.imgStyle} source={item.image} />
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#e9f7ef',
  },
  category: {
    paddingHorizontal: 12,
    alignItems: 'center',
    borderColor: '#b8b8b8',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  imgStyle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: '#ccc',
    borderWidth: 2,
  },
  title: {
    color: '#2c4341',
    marginTop: 5,
    fontWeight: 'bold',
  },
});
