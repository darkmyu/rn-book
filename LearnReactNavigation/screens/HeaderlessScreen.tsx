import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {StackParamList} from '../App';

type Props = NativeStackScreenProps<StackParamList, 'Headerless'>;

function HeaderlessScreen({navigation}: Props) {
  return (
    <SafeAreaView>
      <View>
        <Text>Header None</Text>
        <Button title="뒤로가기" onPress={() => navigation.pop()} />
      </View>
    </SafeAreaView>
  );
}

export default HeaderlessScreen;
