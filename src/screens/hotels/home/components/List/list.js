import React from 'react';
import {FlatList, View} from 'react-native';

import {styles} from './style';
import HotelCard from '../Card';

const HotelList: React = ({onCardPress, data}) => {
  const keyExtractor = data => data.id;

  const renderItem = ({item}) => {
    return <HotelCard item={item} onPress={() => onCardPress(item)} />;
  };

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.flatlist}
      keyboardShouldPersistTaps="handled"
      ListFooterComponent={() => <View style={{height: 80}} />}
    />
  );
};

export default HotelList;
