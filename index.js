import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import { Provider } from 'react-redux'
import ConfigureStore from './src/store/configureStore'
import {name as appName} from './app.json';

const store = ConfigureStore();

const RNRedux = () =>(
    <Provider store={store}>
        <App />
    </Provider>
)


AppRegistry.registerComponent(appName, () => RNRedux);