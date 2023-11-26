import React, {useState} from 'react';
import {Button, SafeAreaView} from 'react-native';
import Box from './src/components/Box';

function App() {
  const [visible, setVisible] = useState(true);

  const onPress = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView>
      <Button title="Toggle" onPress={onPress} />
      {visible && <Box isRounded={true} size="large" color="blue" />}
    </SafeAreaView>
  );
}

export default App;
