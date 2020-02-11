import React from 'react';
import {styles} from './style';
import HotelList from './components/List/list';
import {getListHotels} from '../../../api/index';
import * as strings from '../../../commons/strings';
import {TextInput, ActivityIndicator, View} from 'react-native';

const Hotels: () => React = props => {
  const [hotels, setHotels] = React.useState([]);
  const [loader, setLoader] = React.useState(false);
  const [searchResult, setSearchResult] = React.useState([]);

  React.useEffect(() => {
    getHotels();
  }, []);

  const getHotels = async () => {
    setLoader(true);
    try {
      const data = await getListHotels();
      setHotels(data);
    } catch (err) {
    } finally {
      setLoader(false);
    }
  };

  const onChangeTextInputSearch = value => {
    searchHotel(value);
  };

  const navigateToHotelDetail = hotel => {
    const {navigation} = props;
    navigation.navigate('HotelDetail', {hotel});
  };

  const searchHotel = value => {
    const filteredHotels = hotels.filter(hotel => {
      return hotel.name.toLowerCase().includes(value);
    });

    setSearchResult(filteredHotels);
  };

  return (
    <View styles={styles.container}>
      {loader && <ActivityIndicator color={'red'} size="small" />}

      {!loader && (
        <View style={styles.searchSection}>
          <TextInput
            style={styles.input}
            placeholder={strings.SEARCH_PLACEHOLDER}
            onChangeText={onChangeTextInputSearch}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      )}
      <HotelList
        data={searchResult ? searchResult : hotels}
        onCardPress={navigateToHotelDetail}
      />
    </View>
  );
};

export default Hotels;
