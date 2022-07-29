import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@logo-rn/shared-utils/utils/logo-ui/components';

import { StyleSheet } from 'react-native';
import {LogoButton} from '@logo-rn/logo-button';

import {LogoToast} from '@logo-rn/logo-toast';
import Toast from 'react-native-toast-message'

const App =() => {

  const showWhiteToast = () => {
    Toast.show({
        text1: "a",
        text2: "b",
       topOffset:0
    });
}

const showPrimaryToast = () => {
    Toast.show({
        
        text1: "c",
        text2: "d",
        topOffset: 0
    });
}

  return(
    
    <ApplicationProvider {...eva} theme={eva.light}>
     
     <LogoButton
      title={"toast"}
      onClick={showWhiteToast} />
      <LogoButton
      title={"toast2"}
      onClick={showPrimaryToast} />

     <LogoToast />

     </ApplicationProvider>
        )
        
      }

export default App;


const styles = StyleSheet.create({
  
  dividerLogo:{
    margin:5,
    height:5,
    backgroundColor:'red',
    
  }

})