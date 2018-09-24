import { AppRegistry } from 'react-native';

import App from './src/utils/App';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated in plain JavaScript React classes.',
  'Method `jumpToIndex` is deprecated. Please upgrade your code to use `jumpTo` instead.'
]);

AppRegistry.registerComponent('call', () => App);
