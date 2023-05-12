import React from "react";
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from "react-chat-engine-advanced";
import Header from "../Header/Header";
import StandardMessageForm from "../CustomMessageForms/StandardMessageForm";
import Ai from "../CustomMessageForms/Ai";

const Chat = () => {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID, // project-id
    "testuser", // user
    "1234" // password
  );

  return (
    <div style={{ flexBasis: "100%" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <Header chat={chat} />}
        renderMessageForm={(props) => {
          if (chatProps.chat?.title.startsWith("AiChat_")) {
            return <Ai props={props} activeChat={chatProps.chat} />;
          }
          return <StandardMessageForm props={props} activeChat={chatProps.chat} />;
        }}
      />
    </div>
  );
};

export default Chat;
