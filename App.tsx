import type {PropsWithChildren} from 'react';
import { Button, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';

function App(): JSX.Element {
  const styles = StyleSheet.create({
    keyboardAvoidingView: {
      width: "100%",
      height: "100%",
      backgroundColor: "green",
      borderColor: "blue",
      borderWidth: 1
    }
  });
  return (
    <SafeAreaView>
      <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior='height'>
        <Text>You should be able to see the bottom border even with the keyboard open</Text>
        <TextInput placeholder='type stuff here'/>        
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default App;
