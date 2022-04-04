import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Counter = ({title, nb}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nb}>{nb}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  nb: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  title: {
    fontWeight: 'bold',
    color: 'grey',
    fontSize: 16,
  },
});

export default Counter;
