import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@logo-rn/shared-utils/utils/logo-ui/components';

import { StyleSheet } from 'react-native';

import DropdownComp from './logoComponets/dropdownComp';



const App =() => {

  return(
    
    <ApplicationProvider {...eva} theme={eva.light}>

      <DropdownComp/>

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