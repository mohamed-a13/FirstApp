import React from 'react';
import {Pressable, View, Text, Image, StyleSheet} from 'react-native';
import circle from '../../../assets/icons/circle.png';
import checkCircle from '../../../assets/icons/checkCircle.png';
import delet from '../../../assets/icons/delete.png';

const Todo = ({task, onUpdateTodo, deleteTodo}) => {
  const onChangeStatus = () => {
    onUpdateTodo(task.id);
  };
  const onDelete = () => {
    deleteTodo(task.id);
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={onChangeStatus}>
        <View style={styles.subContainer}>
          <Image
            style={styles.icons}
            source={task.isCompleted ? checkCircle : circle}
          />
          <Text style={styles.title}>{task.title}</Text>
        </View>
      </Pressable>
      <Pressable onPress={onDelete}>
        <Image style={styles.icons} source={delet} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-between',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    paddingLeft: 20,
    fontSize: 16,
  },
  icons: {
    width: 26,
    height: 26,
  },
});

export default Todo;
