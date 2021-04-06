import {AppRegistry} from 'react-native';
import App from './App';
import ScreenLayout from './src/ScreenLayout/ScreenLayout';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ScreenLayout);
