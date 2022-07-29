import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, } from '@logo-rn/shared-utils/utils/logo-ui/components';
import { StyleSheet } from 'react-native';
import {LogoListItem} from '@logo-rn/logo-list-item';
const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
        <LogoListItem columnName='title' item={""} onClick={() => console.log("")} />
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