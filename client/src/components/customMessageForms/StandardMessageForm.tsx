import { useState } from "react";

interface MessageProps {
  props: string;
}

const StandardMessageForm = () => {
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");

  return <div>StandardMessageForm</div>;
};

export default StandardMessageForm;
