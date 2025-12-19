import React,{useState,useEffect} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Task } from './tasks';
export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems], task)
    setTask(null);
  }

  return (
    <View style={styles.container}>
      {/*Todays tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Taskss</Text>
        
        {/** tasks will go here*/}
        <View style={styles.Item}>
          {
            taskItems.map((item,index) => {
              return <Task key={index} text={item} />
            })
          }
        </View>
      </View>

      {/** write a task*/}
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder='Write a task' value={task} onChangeText={(text) => setTask(text)} /> {/* //value equal to that state */}
        <TouchableOpacity onPress={() => handleAddTask()} >
          <View styles={styles.add} >
             <Text style={styles.plus} >+</Text> 
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal:20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight:'bold'
  },
  Item: {
    marginTop:30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth:1,
    Width: 250,
  },
  add: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems:'center',
    borderColor: '#C0C0C0',
    borderWidth:1,
  },
  plus: {},
  
  
});

