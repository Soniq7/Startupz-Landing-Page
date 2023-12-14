import { Input, StyledForm, InputMessage, Button } from "./styled";

const Form = () => (
  <StyledForm>
    <Input placeholder="Name*" />
    <Input placeholder="Email*" />
    <InputMessage placeholder="Message*" />
    <Button>Shoot us a message</Button>
  </StyledForm>
);

export default Form;
