import React from "react";
import { ListItem, ListItemText, Button } from "@material-ui/core";
import { dataBase } from "./firebase_config";

export default function TodoListItem({ todo, inprogress, id }) {
  function toggleInProgress() {
    dataBase.collection("todos").doc(id).update({
      inprogress: !inprogress,
    });
  }

  function deleteTodo() {
    dataBase.collection("todos").doc(id).delete();
  }

  return (
    <div style={{ display: "flex" , backgroundColor: "#ddd", color: "#000", borderRadius: "1rem"}}>
      <ListItem>
        <ListItemText
          primary={todo}
          secondary={inprogress ? "In Progress" : "Done"}
        />
      </ListItem>

      <Button onClick={toggleInProgress}>
        {inprogress ? "☑️" : "undo"}
      </Button>
      <Button onClick={deleteTodo}>❌</Button>
    </div>
  );
}