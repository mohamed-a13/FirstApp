import React, {useState} from 'react';
import {Pressable, View, Text, FlatList, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import Todo from './Todo';
import Form from '../../screens/Tasks/Form';
import Counter from '../../components/Counter';

// Afficher les données du store
import {useSelector, useDispatch} from 'react-redux';
import {getTask, toggleTask, deleteTask} from '../../redux/store';

export default function TaskScreen() {
  // Liste des tâches
  // const [todo, setTodo] = useState([]);

  // Afficher le formulaire
  const [showForm, setShowForm] = useState(false);
  const showFo = () => {
    setShowForm(!showForm);
  };

  const dispatch = useDispatch();

  // Données du store
  const todo = useSelector(getTask);
  console.log('ALL TASK:', todo);

  // item = {title: 'Hello', isCompleted: true}
  const renderItem = ({item}) => {
    return (
      <Todo task={item} onUpdateTodo={onUpdateTodo} deleteTodo={deleteTodo} />
    );
  };

  // Fonction pour ajouter une tâche à la liste
  // Fonction passer en props
  // const addTodo = title => {
  //   setTodo([
  //     ...todo,
  //     {
  //       id: Date.now(),
  //       title,
  //       isCompleted: false,
  //     },
  //   ]);
  // };

  // Fonction pour modifier une tâche à la liste
  // Fonction passer en props
  // const onUpdateTodo = id => {
  //   const newTask = [];
  //   todo.forEach(el => {
  //     if (el.id !== id) {
  //       newTask.push(el);
  //       return;
  //     } else {
  //       newTask.push({
  //         id,
  //         title: 'completed',
  //         isCompleted: !el.isCompleted,
  //       });
  //     }
  //     setTodo(newTask);
  //   });
  // };
  const onUpdateTodo = id => {
    dispatch(toggleTask(id));
  };

  const deleteTodo = id => {
    dispatch(deleteTask(id));
  };

  // Fonction pour supprimer une tâche à la liste
  // Fonction passer en props
  // const deleteTodo = id => {
  //   const newTask = [];
  //   todo.forEach(el => {
  //     if (el.id !== id) {
  //       newTask.push(el);
  //       return;
  //     }
  //   });
  //   setTodo(newTask);
  // };
  return (
    <>
      <FlatList
        ListHeaderComponent={
          <>
            <Header />
            {showForm ? <Form /> : null}
            <View style={styles.containerCounter}>
              <Counter nb={todo.length} title="Tâches créées" />
              <Counter
                nb={todo.filter(el => el.isCompleted === true).length}
                title="Tâches effectuées"
              />
            </View>
          </>
        }
        contentContainerStyle={{flexGrow: 1}}
        data={todo}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      <Pressable style={styles.btnContainer} onPress={showFo}>
        <Text style={styles.btn}>{showForm ? 'x' : '+'}</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  todo: {
    height: 45,
    backgroundColor: 'red',
  },
  btnContainer: {
    position: 'absolute',
    backgroundColor: 'rgb(33, 150, 243)',
    alignItems: 'center',
    borderRadius: 25,
    bottom: 40,
    right: 40,
    width: 50,
    height: 50,
    paddingTop: 2,
  },
  btn: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerCounter: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
