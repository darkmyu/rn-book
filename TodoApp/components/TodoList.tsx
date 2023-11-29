import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Todo} from '../App';

interface Props {
  todos: Todo[];
}

function TodoList({todos}: Props) {
  return (
    <FlatList
      style={styles.list}
      data={todos}
      renderItem={({item}) => (
        <View>
          <Text>{item.text}</Text>
        </View>
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

export default TodoList;
