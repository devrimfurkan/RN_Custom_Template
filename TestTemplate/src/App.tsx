import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, } from '@logo-rn/shared-utils/utils/logo-ui/components';
import { StyleSheet, Text } from 'react-native';
import {LogoTooltip} from '@logo-rn/logo-tooltip';

const App = () => {
  const [visible, setVisible] = useState(false)
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
        <LogoTooltip
       desc="Tooltip Description"
       buttonText="Close"
       anchor={()=><Text>This is Test text!</Text>}
       visible={visible}
       close={() => setVisible(false)}
       onClick={(item: any) => setVisible(false)} />
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