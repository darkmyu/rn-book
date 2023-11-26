import React from 'react';
import {Text, View} from 'react-native';

interface Props {
  name: string;
}

function Greeting({name}: Props) {
  return (
    <View>
      <Text>Hello {name}!</Text>
    </View>
  );
}

export default Greeting;
