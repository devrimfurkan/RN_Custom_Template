import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { LogoLabel } from '@logo-rn/logo-label';

const HomeScreen = () => (
  <Layout >
    <Text category='h1'>HOME Page</Text>
    <LogoLabel children=''>LogoLabel is HERE</LogoLabel>
  </Layout>
);

const App =() => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <HomeScreen />
  </ApplicationProvider>
);

export default App;