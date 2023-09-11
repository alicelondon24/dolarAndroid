import React, { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';

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
    <View style={styles.container}>
      <Text style={styles.header}>Cotações:</Text>
      <TextInput
        placeholder="Cotações:"
        onChangeText={setInputJson}
        value={inputJson}
        style={styles.input}
      />
      <Button title="USD -> BRL" onPress={handleParseJson} />
      <View style={styles.resultContainer}>
        <Text>R$: {brl}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  header: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
    padding: 8,
  },
  resultContainer: {
    marginTop: 16,
  },
});
