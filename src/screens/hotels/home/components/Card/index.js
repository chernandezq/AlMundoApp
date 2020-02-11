import React from 'react';
import {styles} from './style';
import * as strings from '../../../../../commons/strings';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {View, TouchableOpacity, Text, Image} from 'react-native';

const HotelCard: React<Props> = ({onPress, item}) => {
  const {images, name, price, stars} = item;
  let star = Math.round(stars);

  return (
    <TouchableOpacity
      style={[styles.container, {width: '100%', marginVertical: 5 * 2}]}
      activeOpacity={0.5}
      onPress={onPress}>
      <Image
        style={styles.thumbnail}
        source={{
          uri: images[0].source,
        }}
      />
      <View style={styles.body}>
        <View style={styles.row}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.priceTitle}>{strings.PRICE_PER_NIGTH}</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.row}>
            {Array(...Array(star)).map((_, index) => (
              <Icon
                key={index}
                name="star"
                size={22}
                color={'rgb(251, 173, 18)'}
              />
            ))}
          </View>
          <View style={styles.row}>
            <Text style={styles.price}>{`ARS ${price}`}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HotelCard;
