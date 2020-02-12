import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlist: {
    paddingHorizontal: 20,
  },
  body: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  titleComments: {
    marginTop: 10,
    paddingHorizontal: 20,
    fontSize: 20,
    fontWeight: '700',
    paddingBottom: 10,
  },
  comment: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
    marginBottom: 10,
  },
});
