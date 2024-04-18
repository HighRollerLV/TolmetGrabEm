import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'url-polyfill';
console.log(appName);

AppRegistry.registerComponent(appName, () => App);