import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, } from '@logo-rn/shared-utils/utils/logo-ui/components';
import { StyleSheet } from 'react-native';
import {LogoChips} from '@logo-rn/logo-chips';

const App =() => {
  return(
    <ApplicationProvider {...eva} theme={eva.light}>
        <LogoChips status={"primary"} label={"Chips"} />
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