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
  btnBack: {
    position: 'absolute',
    left: 0,
    bottom: 15
  },

  imgBack: {
    height: 20,
    width: 20,
    marginLeft: 15,
    marginTop: 20,
    marginRight: 5
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
