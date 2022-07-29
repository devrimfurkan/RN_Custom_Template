import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@logo-rn/shared-utils/utils/logo-ui/components';
import { LogoLabel } from '@logo-rn/logo-label';
import { StyleSheet } from 'react-native';

import {LogoDatePicker} from '@logo-rn/logo-date-picker';


const DatePickerScreenComp =() => {


    const [value, setValue] = React.useState(new Date());
  return(
    
    <LogoDatePicker 
         label='tarih'
         date={value} 
         setDate={(value: any) => setValue(value)} placeholder={"selam"} />
        )
        
      }

export default DatePickerScreenComp;


const styles = StyleSheet.create({
  
  dividerLogo:{
    margin:5,
    height:5,
    backgroundColor:'red',
    
  }

})