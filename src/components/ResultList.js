import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import Result from './Result';
import { withNavigation } from 'react-navigation';
const ResultList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }
  return (
    <View style={{ marginBottom: 10 }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginLeft: 15,
          marginBottom: 5,
        }}
      >
        {title}
      </Text>
      <FlatList
        data={results}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result) => result.id}
        horizontal
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Detail', { id: item.id })}
            >
              <Result res={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default withNavigation(ResultList);
