import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Todo} from '../App';
import TodoItem from './TodoItem';

interface Props {
  todos: Todo[];
}

function TodoList({todos}: Props) {
  return (
    <FlatList
      style={styles.list}
      data={todos}
      renderItem={({item}) => (
        <TodoItem id={item.id} text={item.text} done={item.done} />
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
