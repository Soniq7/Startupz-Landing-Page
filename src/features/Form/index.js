import axios from "axios";
import { useState } from "react";
import { Input, StyledForm, InputMessage, Button } from "./styled";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("server-address-for-mail-sending", {
        name,
        email,
        message,
      });

      console.log("Message sent", response);
      // Handle the message sending success message
    } catch (error) {
      console.error("Error sending message", error);
      // Handle error message
    }
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        placeholder="Name*"
        value={name}
        onChange={({ target: { value } }) => setName(value)}
      />
      <Input
        placeholder="Email*"
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
      />
      <InputMessage
        placeholder="Message*"
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
      />
      <Button type="submit">Shoot us a message</Button>
    </StyledForm>
  );
};

export default Form;
