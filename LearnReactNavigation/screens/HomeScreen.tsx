import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, View} from 'react-native';
import {StackParamList} from '../App';

type Props = NativeStackScreenProps<StackParamList, 'Home'>;

function HomeScreen({navigation}: Props) {
  return (
    <View>
      <Button
        title="Detail 1 열기"
        onPress={() => navigation.navigate('Detail', {id: 1})}
      />
      <Button
        title="Detail 2 열기"
        onPress={() => navigation.navigate('Detail', {id: 2})}
      />
      <Button
        title="Detail 3 열기"
        onPress={() => navigation.navigate('Detail', {id: 3})}
      />
    </View>
  );
}

export default HomeScreen;
