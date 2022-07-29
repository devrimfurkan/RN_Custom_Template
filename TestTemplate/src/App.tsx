import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, } from '@logo-rn/shared-utils/utils/logo-ui/components';
import { StyleSheet } from 'react-native';
import {LogoCard} from '@logo-rn/logo-card';


const App =() => {
  return(
    <ApplicationProvider {...eva} theme={eva.light}>
         <LogoCard imageSource={
          require("../assets/images/logo.png") 
        } 
      />
     </ApplicationProvider>
        )
      }

export default App;


const styles = StyleSheet.create({
  
  dividerLogo:{
    margin:5,
    height:5,
    fontSize:33,
    backgroundColor:'red',
    
  }

})