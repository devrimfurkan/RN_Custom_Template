import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, } from '@logo-rn/shared-utils/utils/logo-ui/components';
import { StyleSheet, Text } from 'react-native';
import { LogoMenu } from '@logo-rn/logo-menu';
const App = () => {

  const [visible, setVisible] = useState(false)
  const MENU_LIST: { id: string; title: string; selected: boolean; }[] = [
    {
      id: "1",
      title: "Menu Option1",
      selected: false
    },
    {
      id: "2",
      title: "Menu Option2",
      selected: false
    },
    {
      id: "3",
      title: "Menu Option3",
      selected: false
    },
    {
      id: "4",
      title: "Menu Option4",
      selected: false
    }
  ]
  
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <LogoMenu
        anchor={()=><Text>"denee"</Text>}
        optionList={MENU_LIST}
        visible={visible}
        close={() => setVisible(false)}
        setOptionList={(options: any) =>console.log("denee")}
        isRightIcon={true} />
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