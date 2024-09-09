import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {CarouselData} from '../data/CarouselData';

export default function Carousel() {
  return (
    <View style={styles.carouselContainer}>
      <Swiper
        showsPagination={false}
        style={styles.wrapper}
        showsButtons={false}
        autoplay={true}>
        {CarouselData.map((item, index) => (
          <View>
            <Image source={item.image} style={styles.imgStyle} />
          </View>
        ))}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    position: 'relative',
    backgroundColor: '#dbe7e4',
    borderRadius: 10,
    padding: 10,
  },
  wrapper: {
    height: 280,
    borderRadius: 10,
    overflow: 'hidden',
  },
  imgStyle: {
    height: 220,
    width: '100%',
    borderRadius: 15,
    marginBottom: 10,
  },
});
