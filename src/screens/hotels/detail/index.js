import React from 'react';
import {View, Text} from 'react-native';
import HotelCardDetail from './components/Card';

const HotelDetail: () => React<Props> = props => {
  const {hotel} = props.route.params;

  return (
    <View style={{flex: 1}}>
      <HotelCardDetail hotel={hotel}></HotelCardDetail>
    </View>
  );
};

export default HotelDetail;
