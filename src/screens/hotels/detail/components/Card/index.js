import React, {useState} from 'react';
import {styles} from './style';
import {getHotelDetails} from '../../../../../api/index';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {View, Text} from 'react-native';
import MapHotel from '../Map';

const HotelCardDetail: React.Component = ({hotel}) => {
  const {_id} = hotel;
  const [hotelData, setHotelData] = useState(hotel);
  let latitude = 0;
  let longitude = 0;

  React.useEffect(() => {
    getHotelInfo(_id);
  }, []);

  const getHotelInfo = async _id => {
    const data = await getHotelDetails(_id);
    data.stars = Math.round(data.stars);
    setHotelData(data);
  };

  if (hotelData) {
    latitude = hotelData.latitude;
    longitude = hotelData.longitude;
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.row}>
          <Text style={styles.title}>{hotelData.name}</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.stars}>
            {Array(...Array(hotelData.stars)).map((_, index) => (
              <Icon
                key={index}
                name="star"
                size={22}
                color={'rgb(251, 173, 18)'}
              />
            ))}
          </View>
        </View>
        <View style={styles.row}>
          <Icon name="map-marker" size={22} color={'gray'} />
          <Text style={styles.address}>{hotelData.address}</Text>
        </View>
        <MapHotel latitude={latitude} longitude={longitude}></MapHotel>
      </View>
    </View>
  );
};

export default HotelCardDetail;
