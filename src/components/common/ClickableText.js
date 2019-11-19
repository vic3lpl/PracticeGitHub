import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';

const ClickableText = ({label, value, onPress, newStyle}) => {

const {inputStyle, containerStyle, labelStyle} = styles;

  return(
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TouchableOpacity style={{flex:2}} onPress={onPress}>
        <Text style={[inputStyle,newStyle]}>{value}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  inputStyle:{
    fontSize:18,
    color:'grey',
    paddingLeft:5,
    paddingRight:5,
    //flex:2,
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

export { ClickableText };
