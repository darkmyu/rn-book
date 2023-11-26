import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

interface Props {
  count: number;
  onIncrement(): void;
  onDecrement(): void;
}

function Counter({count, onIncrement, onDecrement}: Props) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.numberArea}>
        <Text style={styles.number}>{count}</Text>
      </View>
      <Button title="+1" onPress={onIncrement} />
      <Button title="-1" onPress={onDecrement} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  numberArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 72,
    fontWeight: 'bold',
  },
});

export default Counter;
