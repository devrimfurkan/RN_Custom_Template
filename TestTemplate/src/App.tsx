import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, } from '@logo-rn/shared-utils/utils/logo-ui/components';
import { StyleSheet } from 'react-native';
import {LogoFabButton} from '@logo-rn/logo-fab-button';

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <LogoFabButton onClick={()=>{console.log("clicked...")}}/>
    </ApplicationProvider>
  )
}

export default App;


const styles = StyleSheet.create({

  dividerLogo: {
    margin: 5,
    height: 5,
    fontSize: 33,
    backgroundColor: 'red',

  }

})