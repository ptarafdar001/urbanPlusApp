import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { COLORS, SIZES } from '../constants/theme';

const Carousel = ({ slides, CarouselHeight = 220 }) => {
  return (
    <View style={styles.container}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={[styles.imageStyle, { height: CarouselHeight }]}
        autoplay
        circleLoop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: SIZES.xxSmall,
  },
});

export default Carousel;
