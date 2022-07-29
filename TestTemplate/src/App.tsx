import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, } from '@logo-rn/shared-utils/utils/logo-ui/components';
import { StyleSheet } from 'react-native';
import {LogoList} from '@logo-rn/logo-list';

const App = () => {
  const LIST_ITEMS: { id: string, title: string, checked: boolean, icon?: string }[] = [
    {
     id: "1",
     title: "“Subtitle”",
     checked: false,
     icon: "grid"
    },
    {
     id: "2",
     title: "“Subtitle”",
     checked: false
    },
    {
     id: "3",
     title: "“Subtitle”,",
     checked: false,
     //icon: "person"
    }
    ]
   
    const [list, setList] = useState(LIST_ITEMS)
  return (
    <ApplicationProvider {...eva} theme={eva.light}>

<LogoList list={list} setList={(list: any) => setList(list)}  />
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