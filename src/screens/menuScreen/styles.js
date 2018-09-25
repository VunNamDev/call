import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center'
  },
  positionView: {
    position: 'absolute',
    width: 3 * width,
    height: 3 * width,
    borderRadius: 3 * width,
    left: -width,
    backgroundColor: '#D0011B',
    top: -(3 * width - 140)
  },
  inforView: {
    height: 40,
    width: width,
    alignItems: 'center',
    marginTop: 50
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
  btn: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 80,
    width: width - 40,
    borderRadius: 5,
    backgroundColor: '#FFF',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 5,
    shadowOpacity: 0.4,
    elevation: 5
  },
  img: {
    height: 35,
    width: 35,
    marginLeft: 15,
    marginRight: 30
  },
  text: {
    color: '#474747',
    fontSize: 20
  }
});
