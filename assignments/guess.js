import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import React, { useEffect } from 'react';

export default function Guess() {
  
const [guess, setGuess] = React.useState('');
const [amount, setAmount] = React.useState(0);
const [result, setResult] = React.useState('');
const [answer, setAnswer] = React.useState(Math.floor(Math.random() * 100) + 1);




const guessMade = () => {
    setAmount(amount + 1);
    if (guess == answer) {
        setResult("You guessed it in " + amount + " amount of times!")
    } else if (guess > answer) {
        setResult("It's less than " + guess)
    } else if (guess < answer) {
        setResult("It's more than " + guess)
    }

}

const minus = () => {
  setResult(firstAnswer - secondAnswer);
}

  return (
    <View style={styles.container}>
      <Text>Guess a number between 1-100</Text>
      <TextInput
      onChangeText={text => setGuess(text)}
      value={guess}
      style={{width: 200, borderColor: 'gray', borderWidth: 1}}
      />
      <Button onPress={guessMade} title='Make guess'/>
        <Text>{result}</Text>

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
