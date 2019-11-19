import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


const Header = (props) => {
  const {textStyle, containerStyle} = styles;
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{props.headerText} </Text>
    </View>
  );
}

const styles = {
  textStyle:{
    fontSize:20
  },
  containerStyle:{
    justifyContent:'center',
    alignItems:'center',
    height:60,
    paddingTop:15,
    shadowColor:'#000',
    shadowOpacity:0.2,
    shadowOffset:{width:0, height:2},
    elevation:2,
    position:'relative',
    backgroundColor:'#F8F8F8'

  }
}

export { Header };
