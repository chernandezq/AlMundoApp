import React from 'react';
import {View, Text} from 'react-native';
import {getHotelDetails} from '../../../api';

const HotelDetail: () => React = props => {
  const [details, setDetails] = React.useState();

  const {_id, name, price} = props.route.params.hotel;
  let latitude;
  let longitude;
  let address;
  let comments = [];
  let images = [];

  React.useEffect(() => {
    getDetailHotel();
  }, []);

  const getDetailHotel = async () => {
    const data = await getHotelDetails(_id);
    setDetails(data);
  };

  if (details) {
    latitude = details.latitude;
    longitude = details.longitude;
    address = details.address;
  }

  return (
    <View>
      <Text>{name}</Text>
      <Text>{latitude}</Text>
      <Text>{longitude}</Text>
      <Text>{address}</Text>
    </View>
  );
};

export default HotelDetail;
