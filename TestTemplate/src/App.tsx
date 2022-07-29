import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@logo-rn/shared-utils/utils/logo-ui/components';
import { LogoLabel } from '@logo-rn/logo-label';
import { StyleSheet } from 'react-native';
import {LogoButton} from '@logo-rn/logo-button';
import {LogoAlert} from '@logo-rn/logo-alert';
import {LogoDivider} from '@logo-rn/logo-divider';
import CheckboxScreenComp from './logoComponents/checkBoxComp';


const App =() => {


  return(
    
    <ApplicationProvider {...eva} theme={eva.light}>
    
    <CheckboxScreenComp/>

     </ApplicationProvider>
        )
        
      }

export default App;
