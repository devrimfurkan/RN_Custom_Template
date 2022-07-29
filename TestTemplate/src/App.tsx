import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, } from '@logo-rn/shared-utils/utils/logo-ui/components';
import { StyleSheet } from 'react-native';
import { LogoDialog } from '@logo-rn/logo-dialog';

const App = () => {
  const [visible, setVisible] = React.useState(true);
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <LogoDialog

        button2Text='btn2'
        button3Text='btn3'
        onClick2={() => { console.log("working...") }}
        onClick3={() => { console.log("working...") }}
        visible={visible}
        close={() => setVisible(false)}
        title={"“Title”"}
        buttonText={"“Button”"}
        onClick={() => console.log("clicked")} />
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