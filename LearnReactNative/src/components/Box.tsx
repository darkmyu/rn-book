import React from 'react';
import {ColorValue, StyleSheet, View} from 'react-native';

interface Props {
  isRounded: boolean;
  size?: 'small' | 'medium' | 'large';
  color?: ColorValue;
}

function Box({isRounded, size = 'medium', color = 'black'}: Props) {
  return (
    <View
      style={[
        styles.box,
        isRounded && styles.rounded,
        styles[size],
        {
          backgroundColor: color,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'black',
  },
  rounded: {
    borderRadius: 16,
  },
  small: {
    width: 32,
    height: 32,
  },
  medium: {
    width: 64,
    height: 64,
  },
  large: {
    width: 128,
    height: 128,
  },
});

export default Box;
