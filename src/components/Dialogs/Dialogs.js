import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./Items/DialogItem";
import Messages from "./Items/Messages";
import styles from "../base/Buttons.module.css";
import { Formik, Form, Field } from "formik";

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

  return (
    <div className={classes.dialogsPage}>
      <div className={classes.dialogs}>
        <div className={classes.dialog_items}>{dialogsElements}</div>
        <div className={classes.messages}>
          <div>{messageElements}</div>
          <div>
            <div>
              <Formik
                initialValues={{ newMessage: "" }}
                validate={(values) => {
                  const errors = {};
                  if (!values.newMessage) {
                    errors.newMessage = "Please create your new post";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  let text = values.newMessage;
                  props.updateNewMessageBody(text);
                  props.sendNewMessageBody(text);
                  resetForm();
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting }) => (
                  <div className={classes.loginField}>
                    <Form>
                      <label
                        htmlFor="newMessage"
                        className={classes.label}
                      ></label>
                      <Field
                        type="newMessage"
                        name="newMessage"
                        className={classes.textarea}
                        placeholder="Enter your message"
                      />
                      <div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={styles.button_apricot}
                        >
                          Send
                        </button>
                      </div>
                    </Form>
                  </div>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
