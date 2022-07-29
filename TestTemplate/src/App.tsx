import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@logo-rn/shared-utils/utils/logo-ui/components';
import { StyleSheet } from 'react-native';
import {LogoSwitch} from '@logo-rn/logo-switch';


const App =() => {

  const [checked, setChecked] = React.useState(false);

  return(
    
    <ApplicationProvider {...eva} theme={eva.light}>
       <LogoSwitch 
       checked={checked} 
       onChange={(value:any) => setChecked(value)} 
     />
      <LogoSwitch checked={true} key={"1"} label={"a"} onChange={() => { }} />
      <LogoSwitch checked={true} key={"2"} disabled={true} label={"b"} onChange={() => { }} />
      <LogoSwitch checked={false} key={"3"} label={"c"} onChange={() => { }} />
      <LogoSwitch checked={false} key={"4"} disabled={true} label={"d"} onChange={() => { }} />
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