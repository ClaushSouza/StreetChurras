import * as React from 'react';
import { Button, View, Text } from 'react-native';
import Produtos from './Produto';
import { useRoute } from '@react-navigation/native'


function ResultadoFinal(){
  
  return (
    <View style={StylesResultado}>
      <Produtos />
      <Text></Text>
    </View>

  );
};

export default ResultadoFinal;