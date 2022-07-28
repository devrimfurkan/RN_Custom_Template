import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { LogoLabel } from '@logo-rn/logo-label';
import { StyleSheet } from 'react-native'

const App =() => (
  <ApplicationProvider {...eva} theme={eva.light}>
  <LogoLabel style={styles.labels}>LogoLabel is HERE</LogoLabel>
  </ApplicationProvider>
);

export default App;


const styles = StyleSheet.create({
  
  labels:{
    color:'red',
    fontSize:44,
  }

})