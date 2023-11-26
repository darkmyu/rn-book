import React from 'react';
import {SafeAreaView} from 'react-native';
import Greeting from './src/components/Greeting';

function App() {
  return (
    <SafeAreaView>
      <Greeting name="bammyu" />
    </SafeAreaView>
  );
}

export default App;
