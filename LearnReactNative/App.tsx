import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Counter from './src/components/Counter';

function App() {
  const [count, setCount] = useState(0);

  const onIncrement = () => setCount(count + 1);
  const onDecrement = () => setCount(count - 1);

  return (
    <SafeAreaView style={styles.full}>
      <Counter
        count={count}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
});

export default App;
