import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Button, FlatList } from 'react-native'

import GoalItem from './components/GoalItem';
export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoal] = useState([]);

  const goalInputHnadler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoal(currentGoals => [...currentGoals, { key: Math.random().toString(), value: enteredGoal }])
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.input}
          onChangeText={goalInputHnadler}
          value={enteredGoal}
        />
        <Button style="styles.Button" title="ADD" onPress={addGoalHandler} />
      </View>
      <FlatList
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
      />


    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },

  Button: {
    color: '#000000'
  }



});