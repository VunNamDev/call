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
  },
  mainView: {
    alignItems: 'center',
    width: width - 20,
    flex: 1
  },
  top: {
    flexDirection: 'row',
    height: 60,
    width: width - 40,
    borderRadius: 5,
    backgroundColor: '#FFF',
    shadowColor: '#000000',
    shadowOffset: {
      width: 3,
      height: 10
    },
    shadowRadius: 5,
    shadowOpacity: 0.4,
    elevation: 5,
    alignItems: 'center'
  },
  imgFind: {
    height: 25,
    width: 25,
    marginLeft: 15,
    marginRight: 5
  },
  textInput: {
    flex: 1,
    marginRight: 10,
    fontSize: 16,
    color: '#000'
  },
  imgClear: {
    height: 15,
    width: 15,
    marginRight: 15
  },
  sectionView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  sectionList: {
    marginTop: 20,
    flex: 1,
    marginLeft: 10
  },
  personView: {
    flexDirection: 'row',
    height: 60,
    width: width - 40,
    borderRadius: 5,
    backgroundColor: null,

    alignItems: 'center',
    marginBottom: 5
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#959595',
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    color: '#959595'
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
    color: '#858585',
    marginRight: 10
  },
  line: {
    height: 1,
    width: (width * 2) / 3,
    backgroundColor: '#858585'
  }
});
