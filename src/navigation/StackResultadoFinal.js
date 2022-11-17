import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import Produtos from '../screens/Produto';
import ResultadoFinal from '../screens/ResultadoFinal';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="ResultoFinal" component={ResultadoFinal} />
  </Stack.Navigator>
);
