import React from 'react';
import {FlatList, View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {styles} from './style';

const CommentsHotel: React = ({comments}) => {
  const keyExtractor = item => item._id;

  return (
    <View>
      <Text style={styles.titleComments}>Comentarios</Text>
      <FlatList
        data={comments}
        keyExtractor={keyExtractor}
        renderItem={({item}) => (
          <View style={styles.body}>
            <View style={styles.row}>
              <Text style={styles.title}>{item.user}</Text>
            </View>
            <View style={styles.row}>
              <View style={styles.row}>
                {Array(...Array(item.stars)).map((_, index) => (
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
              <View style={styles.row}>
                <Text style={styles.comment}>{item.comment}</Text>
              </View>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatlist}
        keyboardShouldPersistTaps="handled"
        ListFooterComponent={() => <View style={{height: 80}} />}
      />
    </View>
  );
};

export default CommentsHotel;
