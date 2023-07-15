import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./Items/DialogItem";
import Messages from "./Items/Messages";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map((dialog) => {
    return (
      <DialogItem
        name={dialog.name}
        id={dialog.id}
        key={dialog.id}
        src={dialog.src}
      />
    );
  });

  let messageElements = state.messageData.map((msg) => {
    return <Messages message={msg.message} key={msg.id} />;
  });

  let newMessageData = state.newMessageData;

  let onSendMessage = () => {
    props.sendNewMessageBody();
  };

  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialog_items}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>{messageElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageData}
              onChange={onNewMessageChange}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
