import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@logo-rn/shared-utils/utils/logo-ui/components';
import { LogoLabel } from '@logo-rn/logo-label';
import { StyleSheet } from 'react-native';
import {LogoButton} from '@logo-rn/logo-button';
import {LogoAlert} from '@logo-rn/logo-alert';
import {LogoDivider} from '@logo-rn/logo-divider';


const App =() => {

  const [visible, setVisible] = React.useState(false);
  const showAlert = async () => {
    setVisible(true)
}

const closeAlert = async () => {
    setVisible(false)
}
  return(
    
    <ApplicationProvider {...eva} theme={eva.light}>
     
      <LogoButton
         title={"Press Me"}
         onClick={showAlert} />

        <LogoAlert
        desc={"Description"}
        visible={visible}
        close={closeAlert}
        title={"Title"}
        rightButtonText={"close"}
        leftButtonText={"close"}
        rightButtonAction={closeAlert}
        leftButtonAction={closeAlert}
        /> 

      <LogoDivider width="90%" style={styles.dividerLogo}/>

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