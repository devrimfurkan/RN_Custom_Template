import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, } from '@logo-rn/shared-utils/utils/logo-ui/components';
import { StyleSheet, Text } from 'react-native';
import {LogoSpinner} from '@logo-rn/logo-spinner';

const App = () => {
  const [value, setValue] = useState(100)
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
       <LogoSpinner title="Loading"/>
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