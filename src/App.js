import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk'; // return function so we can call other reducers
import {createStore, applyMiddleware} from 'redux';
import LoginForm from './components/LoginForm';
import reducers from './reducers';

class App extends Component{

componentWillMount(){

}

  render(){
    const store = createStore(reducers,{},applyMiddleware(ReduxThunk));

    return(
      <Provider store={store}>
        <LoginForm/>
      </Provider>

    );
  }
}

export default App;
