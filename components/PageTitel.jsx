import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PageTitle = (props) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 50,
    marginHorizontal: 20,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#A9A9A9',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#A9A9A9',
    textTransform: 'uppercase',
  },
});

export default PageTitle;
