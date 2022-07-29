import React, {useState} from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, } from '@logo-rn/shared-utils/utils/logo-ui/components';
import { StyleSheet } from 'react-native';
import { LogoDataTable } from '@logo-rn/logo-data-table';

const App = () => {
  const LIST_ITEMS=[{
    test: "This is Test item"
  }]
  const [list, setList] = useState(LIST_ITEMS)
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <LogoDataTable 
      list={list} 
      setList={(list: any) => setList(list)} 
      listColumnKey="title"
      onClick={()=>{}}

      />
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