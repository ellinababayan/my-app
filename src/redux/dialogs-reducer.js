let initialState = {
  dialogsData: [
    {
      name: "Jennifer",
      id: "1",
      src: "https://i.pinimg.com/originals/b4/72/a1/b472a1234f0fad2a6bd45750c14e7bec.jpg",
    },
    {
      name: "John",
      id: "2",
      src: "https://img.freepik.com/premium-photo/handsome-guy-in-formal-clothes-sitting-on-a-bench-with-modern-styling-haircut-looking-at-camera_246930-2907.jpg",
    },
    {
      name: "Asheley",
      id: "3",
      src: "https://pbs.twimg.com/profile_images/1251950132020592640/hO_9ZKkJ_400x400.jpg",
    },
    {
      name: "Tracey",
      id: "4",
      src: "http://s.ekabu.ru/localStorage/post/cc/e9/ae/d7/cce9aed7_resizedScaled_740to740.jpg",
    },
    {
      name: "Carla",
      id: "5",
      src: "https://i.pinimg.com/736x/07/a9/7b/07a97b04714c28fca8e54daae7821d00.jpg",
    },
  ],

  messageData: [
    { id: 1, message: 1 },
    { id: 2, message: 2 },
    { id: 3, message: 3 },
    { id: 4, message: 4 },
    { id: 5, message: 5 },
  ],

  newMessageData: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE-NEW-MESSAGE-BODY":
      return {
        ...state,
        newMessageData: action.body,
      };

    case "SEND-MESSAGE":
      let body = state.newMessageData;
      return {
        ...state,
        messageData: [...state.messageData],
        messageData: [...state.messageData, { id: 6, message: body }],
        newMessageData: "",
      };

    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return { type: "SEND-MESSAGE" };
};

export const updateNewMessageBodyCreator = (body) => {
  return { type: "UPDATE-NEW-MESSAGE-BODY", body: body };
};

export default dialogsReducer;
