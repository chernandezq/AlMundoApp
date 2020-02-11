import React from 'react';
import MapView, {Marker} from 'react-native-maps';

const MapHotel: React = ({latitude, longitude}) => {
  const coordinate = {latitude: latitude, longitude: longitude};
  return (
    <MapView
      style={{
        marginTop: 10,
        width: '100%',
        height: 150,
      }}
      initialRegion={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
      }}>
      <Marker coordinate={coordinate} />
    </MapView>
  );
};

export default MapHotel;
