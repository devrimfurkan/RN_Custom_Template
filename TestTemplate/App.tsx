import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@logo-rn/shared-utils/utils/logo-ui/components';
import { LogoLabel } from '@logo-rn/logo-label';
import { StyleSheet } from 'react-native'

const App =() => (
  <ApplicationProvider {...eva} theme={eva.light}>
  <LogoLabel >LogoLabel is HERE</LogoLabel>
  </ApplicationProvider>
);

export default App;


const styles = StyleSheet.create({
  
  labels:{
    marginTop:25,
    color:'red',
    fontSize:44,
  }

})