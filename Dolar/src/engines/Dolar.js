import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export const Dolar = () => {
  const [inputJson, setInputJson] = useState('');
  const [brl, setbrl] = useState('');

  const handleParseJson = () => {
    try {
      const jsonData = JSON.parse(inputJson);

      // Verifique se os campos existem no JSON antes de definir os estados
      if (jsonData.usd.brl) {
        setbrl(jsonData.usd.brl);
      } else {
        alert('JSON não contém todos os campos necessários.');
      }
    } catch (error) {
      alert('Erro ao analisar o JSON.');
    }
  };

  return (
    <View>
      <Text>Cotações:</Text>
      <TextInput
        placeholder="Cotações"
        onChangeText={setInputJson}
        value={inputJson}
      />
      <Button title="USD -> BRL" onPress={handleParseJson} />
      <Text>R$: {brl}</Text>
    </View>
  );
};
