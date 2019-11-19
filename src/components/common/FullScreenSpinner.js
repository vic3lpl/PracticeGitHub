import React from 'react'
import { View, ActivityIndicator,Modal } from 'react-native'

const FullScreenSpinner = ({ size,showYN }) => {
    return (<Modal
          transparent={true}
          animationType={'none'}
          visible={showYN}
          onRequestClose={() => {console.log('close modal')}}>
          <View style={styles.modalBackground}>
            <View style={styles.activityIndicatorWrapper}>
              <ActivityIndicator size={size || 'large'}/>
            </View>
          </View>
      </Modal>
      );
}

const styles = {
    spinnerStyle:{
      flex:1,
      alignSelf:'center',
      alignItems:'center',
      justifyContent:'center'
    },
    modalBackground: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-around',
      backgroundColor: '#00000040'
    },
    activityIndicatorWrapper: {
      backgroundColor: '#FFFFFF',
      height: 100,
      width: 100,
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'
    }
  }

  export {FullScreenSpinner};
