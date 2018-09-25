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
  mainView: {
    alignItems: 'center',
    width: width - 40,
    flex: 1
  },
  searchView: {
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
  imgEarth: {
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
  btnView: {
    height: 60,
    flexDirection: 'row'
  },
  btn: {
    marginTop: 10,
    flexDirection: 'row',
    height: 50,
    width: 140,
    borderRadius: 5,
    backgroundColor: '#D4001B',
    shadowColor: '#000000',
    shadowOffset: {
      width: 3,
      height: 10
    },
    shadowRadius: 5,
    shadowOpacity: 0.4,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold'
  },
  titleView: {
    height: 35,
    width: width - 40,
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginTop: 5
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  line: {
    height: 1,
    width: width - 40,
    flexDirection: 'row'
  },
  wrap: {
    flex: 1
  },
  miniLine: {
    width: 20,
    height: 1,
    backgroundColor: '#BA4040'
  },
  item: {
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
    marginRight: 15
  },
  itemText: {
    fontSize: 18,
    color: '#959595'
  },
  sectionHeaderText: {
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
    color: '#858585'
  }
});
