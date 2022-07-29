import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, } from '@logo-rn/shared-utils/utils/logo-ui/components';
import {LogoAvatar} from '@logo-rn/logo-avatar';
import { StyleSheet } from 'react-native';



const App =() => {
  return(
    
    <ApplicationProvider {...eva} theme={eva.light}>
     <LogoAvatar size={56} />
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