import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, } from '@logo-rn/shared-utils/utils/logo-ui/components';
import { StyleSheet } from 'react-native';
import {LogoTextInput, LogoDecimalInput, LogoPasswordInput} from '@logo-rn/logo-text-input';

const App = () => {
  const [value, setValue] = React.useState('');
  const [valueDeciaml, setValueDecimal] = React.useState(0);
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
             <LogoTextInput 
          label="Text Here"
          placeholder={"Yazı Giriniz"}
          value={value}
          onChangeValue={(nextValue: any) => setValue(nextValue)} 
        />
               <LogoDecimalInput  
            label="Number Here"
            placeholder={"Sayı Giriniz"}
            value={value}
            onChangeValue={(nextValue: any) => setValue(nextValue)} 
         />
                <LogoPasswordInput 
          label="Password Here"
          placeholder={"Sayı Giriniz"}
          value={value}       
          onChangeValue={(nextValue: any) => setValue(nextValue)} />

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