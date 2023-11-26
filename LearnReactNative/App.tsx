import React from 'react';
import {SafeAreaView} from 'react-native';
import Box from './src/components/Box';

function App() {
  return (
    <SafeAreaView>
      <Box isRounded={true} size="large" />
    </SafeAreaView>
  );
}

export default App;
