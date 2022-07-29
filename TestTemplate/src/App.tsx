import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@logo-rn/shared-utils/utils/logo-ui/components';

import {LogoCircleBar, LogoLinearProgressBar} from '@logo-rn/logo-progress-bar';


const App =() => {


  return(
    
    <ApplicationProvider {...eva} theme={eva.light}>
    
     <LogoCircleBar />

     <LogoLinearProgressBar />
 
     </ApplicationProvider>
        )
        
      }

export default App;


