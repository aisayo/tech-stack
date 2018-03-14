import React from 'react';
import { View } from 'react-native';
import  { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers/index'


const App = () => {
  return (
    <Provider>
      <View store={createStore(reducers)}/>
    </Provider>
  );
};

export default App;