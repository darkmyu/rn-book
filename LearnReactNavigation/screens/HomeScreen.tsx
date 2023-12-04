import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, View} from 'react-native';
import {StackParamList} from '../App';

type Props = NativeStackScreenProps<StackParamList, 'Home'>;

function HomeScreen({navigation}: Props) {
  return (
    <View>
      <Button
        title="Detail 열기"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
}

export default HomeScreen;
