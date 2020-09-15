import React from 'react';
import { Text, View, Image } from 'react-native';

const Result = ({ res }) => {
  return (
    <View style={{ marginLeft: 15 }}>
      <Image
        source={{ uri: res.image_url }}
        style={{ height: 120, width: 250, borderRadius: 4, marginBottom: 5 }}
      />
      <Text style={{ fontWeight: 'bold' }}>{res.name}</Text>
      <Text>
        {res.rating} Stars , {res.review_count} Reviews
      </Text>
    </View>
  );
};

export default Result;
