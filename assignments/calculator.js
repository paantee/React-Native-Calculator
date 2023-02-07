import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import React from 'react';

export default function Calculator() {
  
const [firstAnswer, setFirstAnswer] = React.useState('');
const [secondAnswer, setSecondAnswer] = React.useState('');
const [result, setResult] = React.useState('');

const plus = () => {
  setResult(parseInt(firstAnswer) + parseInt(secondAnswer));
}

const minus = () => {
  setResult(firstAnswer - secondAnswer);
}

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput
      onChangeText={sumA => setFirstAnswer(sumA)}
      value={firstAnswer}
      style={{width: 200, borderColor: 'gray', borderWidth: 1}}
      />
            <TextInput
      onChangeText={secondAnswer => setSecondAnswer(secondAnswer)}
      value={secondAnswer}
      style={{width: 200, borderColor: 'gray', borderWidth: 1}}
      />
      <View style={styles.button}>
      <Button title='+' onPress={plus} color='green'/>
      <Button title='-' onPress={minus} color='red'/>
      <StatusBar style="auto" />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'

  }
});
