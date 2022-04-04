import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  const date = new Date();
  const days = [
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
    'Dimanche',
  ];
  const months = [
    'janvier',
    'février',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'août',
    'septembre',
    'octobre',
    'novembre',
    'décembre',
  ];
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{`${days[date.getDay()]} ${date.getDate()} ${
        months[date.getMonth()]
      }`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingLeft: 25,
    paddingTop: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: 'black',
  },
});

export default Header;
