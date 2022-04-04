import React from 'react';
import {StyleSheet} from 'react-native';
import TaskScreen from './src/screens/Tasks/TaskScreen';
// Importer Provider pour attacher le store à l'application
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = ({children, title}) => {
  return (
    <Provider store={store}>
      <TaskScreen />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
