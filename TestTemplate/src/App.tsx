import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@logo-rn/shared-utils/utils/logo-ui/components';

import { StyleSheet } from 'react-native';

import {LogoSearchBar, LogoSearchOptionsArea} from '@logo-rn/logo-search-bar';


const App =() => {

  const [value, setValue] = React.useState('');
  return(
    
    <ApplicationProvider {...eva} theme={eva.light}>
     <LogoSearchBar 
    
    placeholder="Yazı Giriniz"
    value={value}
    onChangeValue={(nextValue: any) => setValue(nextValue)} 
  />
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