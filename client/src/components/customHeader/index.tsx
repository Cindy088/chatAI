import React, { ReactNode } from "react";
import {
  ChatBubbleLeftRightIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

interface ChatHeaderProps {
  title?: ReactNode;
  description?: string;
}
interface CustomHeaderProps {
  chat: ChatHeaderProps;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ chat }) => {
  return (
    <div className="chat-header">
      <div className="flexbetween">
        <ChatBubbleLeftRightIcon className="icon-chat" />
        <h3 className="header-text">
          {typeof chat.title === "string" ? chat.title : "Let's start chat!"}
        </h3>
      </div>
      <div className="flexbetween">
        <PhoneIcon className="icon-phone" />
        {chat.description !== "⬅️ ⬅️ ⬅️" ? (
          <p className="header-text">{chat.description}</p>
        ) : (
          <p className="header-text">No chat selected</p>
        )}
      </div>
    </div>
  );
};

export default CustomHeader;
