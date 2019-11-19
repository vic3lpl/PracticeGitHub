import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button, Input, Card, CardSection} from './common';
import {connect} from 'react-redux';
import {
  emailChanged,
  passwordChanged,
  callLoginApi
} from '../action';

class LoginForm extends Component{

onEmailChange(text){
  this.props.emailChanged(text);
}

onPasswordChanged(text){
  this.props.passwordChanged(text);
}

onPressLoginButton(){
  const {email, password} = this.props;
  this.props.callLoginApi({email, password});
}

  render(){
    return(
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@email.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            placeholder="Password"
            onChangeText={this.onPasswordChanged.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onPressLoginButton.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
    )

  }
}

const mapStateToProps = state =>{
  return{
    email:state.auth.email,
    password:state.auth.password
  }
}

export default connect(mapStateToProps,{emailChanged, passwordChanged, callLoginApi})(LoginForm);
