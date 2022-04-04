import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTask} from '../../redux/store';

const Form = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const onChangeTitle = tod => {
    setTitle(tod);
  };

  const addNewTodo = () => {
    if (title === '') return alert('Merci de rentrer une tâche');

    dispatch(addTask(title));

    setTitle('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTitle}
        value={title}
        placeholder="Entrer une tâche"
      />
      <Button style={styles.button} title="Valider" onPress={addNewTodo} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 15,
    width: '100%',
  },
  input: {
    height: 40,
    width: '70%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    height: 40,
    width: '40%',
    borderRadius: 5,
  },
});

export default Form;
