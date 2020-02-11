import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e9e9',
    borderRadius: 4,
    justifyContent: 'space-between',
    paddingBottom: 25,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  body: {
    backgroundColor: 'white',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    marginBottom: 10,
    marginTop: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 19,
    color: '#000',
    fontWeight: '700',
  },
  address: {
    marginTop: 10,
    fontSize: 16,
    color: 'gray',
    fontWeight: '700',
  },
  row: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  stars: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
});
