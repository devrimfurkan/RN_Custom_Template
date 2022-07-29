import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@logo-rn/shared-utils/utils/logo-ui/components';

import ImageListComp from './logoComponents/imageListComp';


const App =() => {


  return(
    
    <ApplicationProvider {...eva} theme={eva.light}>
     
     <ImageListComp/>

    </ApplicationProvider>
        )
    
      }

export default App;


