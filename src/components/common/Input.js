import React from 'react';
import {View, TextInput, Text} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry, editable, newStyle}) => {

const {inputStyle, containerStyle, labelStyle} = styles;

  return(
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        placeholder={placeholder}
        style={[inputStyle,newStyle]}
        value={value}
        onChangeText={onChangeText}
        editable={editable}
      />
    </View>
  );
};

const styles = {
  inputStyle:{
    fontSize:18,
    color:'#000',
    paddingLeft:5,
    paddingRight:5,
    flex:2,
    lineHeight:23
  },
  labelStyle:{
    flex:1,
    fontSize:18,
    paddingLeft:20
  },
  containerStyle:{
    alignItems:'center',
    flex:1,
    height:40,
    flexDirection:'row'
  }
};

export { Input };
