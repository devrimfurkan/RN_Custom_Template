import React from 'react';

import { LogoLabel } from '@logo-rn/logo-label';
import { StyleSheet } from 'react-native';

import {LogoDropdown} from '@logo-rn/logo-dropdown';


const dropdownComp =() => {

    const SELECT_OPTIONS: { title: string }[] =  [
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
  return(
      <LogoDropdown
        label="Label"
        placeholder="Placeholder"
        style={styles.dropdown}
        optionList={SELECT_OPTIONS}
        />
        )   
      }

export default dropdownComp;


const styles = StyleSheet.create({
  
  dropdown:{
    margin:20,
    height:45,
   
    
  }

})