import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@logo-rn/shared-utils/utils/logo-ui/components';
import { LogoLabel } from '@logo-rn/logo-label';
import { StyleSheet } from 'react-native';
import {LogoButton} from '@logo-rn/logo-button';
import {LogoAlert} from '@logo-rn/logo-alert';
import {LogoDivider} from '@logo-rn/logo-divider';
import { LogoRadioButton, LogoRadioButtonGroup } from '@logo-rn/logo-radio-button';


const App =() => {

  const RADIO_OPTIONS: { id: string, value: string, checked: boolean, disabled: boolean }[] = [
    {
          id: "1",
          value: "Option 1",
          checked: false,
          disabled: false
      },
      {
          id: "2",
          value: "Option 2",
          checked: true,
          disabled: false
      },
      {
          id: "3",
          value: "Option 3",
          checked: true,
          disabled: true
      },
    ]
  return(
    
    <ApplicationProvider {...eva} theme={eva.light}>
       <LogoRadioButtonGroup options={RADIO_OPTIONS} title={"Options"} />


       <LogoRadioButton checked={false} key={"1"} label={"1"} />
       <LogoRadioButton checked={false} disabled={true} key={"2"} label={"2"} />
       <LogoRadioButton checked={true} key={"3"} label={"3"}/>
       <LogoRadioButton checked={true} disabled={true} key={"4"} label={"4"}/>

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