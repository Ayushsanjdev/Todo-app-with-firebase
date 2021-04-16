import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from "react";
import { dataBase } from './firebase_config';
import firebase from "firebase";

function App() {

  const [todoInput, setTodoInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    dataBase.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });

    setTodoInput("");
  }

  return (
    <div className="App" style={{
      display: "flex",
      justifyContent : "center",
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h1>Todo App</h1>
      <form>
      <TextField
      value={todoInput}
      onChange={(e) => 
        setTodoInput(e.target.value)} id="standard-basic" label="get it done" 
        style={{maxWidth: "300px", width: "90vw"}}/>

        <Button variant="contained" type="submit" onClick={addTodo} style={{display: "none"}}>
          add
        </Button>
      </form>
    </div>
  );
}

export default App;
