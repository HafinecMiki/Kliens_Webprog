import { messageChannel } from "./index";


export function sendMessage(message) {
  return () => {
    messageChannel.create(message);
  };
}

export function receiveMessages() {
  return (dispatch) => {
    messageChannel.created((message) => {
      if (message.type) {
        dispatch(message);
      }
    });
  };
}