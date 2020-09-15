import React, { useState, useEffect } from 'react';
import { View, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';
const DetailScreen = ({ navigation }) => {
  const [result, Setresult] = useState({ photos: [] });
  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const res = await yelp.get(`${id}`);
    Setresult(res.data.photos);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  return (
    <View>
      <FlatList
        data={result}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return (
            <Image source={{ uri: item }} style={{ height: 150, width: 200 }} />
          );
        }}
      />
    </View>
  );
};

export default DetailScreen;
