import React from 'react';
import { TextInput, View, Button, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
const SearchBar = ({ term, newterm, submit }) => {
  return (
    <View style={styles.searchstyle}>
      <Feather name='search' style={styles.icon} />
      <TextInput
        placeholder='Search'
        style={{ fontSize: 18, flex: 1 }}
        value={term}
        onChangeText={(input) => newterm(input)}
        onEndEditing={submit}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  searchstyle: {
    height: 50,
    backgroundColor: '#F0EEEE',
    borderRadius: 5,
    margin: 15,
    flexDirection: 'row',
  },
  icon: {
    fontSize: 45,
    marginHorizontal: 14,
    alignSelf: 'center',
  },
});
export default SearchBar;
