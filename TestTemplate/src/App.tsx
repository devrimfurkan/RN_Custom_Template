import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, } from '@logo-rn/shared-utils/utils/logo-ui/components';
import { StyleSheet, Text } from 'react-native';
import {LogoSelect, LogoMultiSelect} from '@logo-rn/logo-select';

const App = () => {
  const SELECT_OPTIONS: { title: string }[] = [
    {
        title: "option1"
    },
     {
        title: "option2"
    },
    {
        title: "option3"
    },
]


  return (
    <ApplicationProvider {...eva} theme={eva.light}>
        <LogoSelect
        label="Label"
        placeholder="Placeholder"
        optionList={SELECT_OPTIONS}
  />
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