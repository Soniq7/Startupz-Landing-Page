import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 512px;
  height: 601px;
  margin-left: 124px;
  padding-top: 65px;
  background-color: ${({ theme }) => theme.colors.background.backgroundForm};
  border-radius: 10px;

  @media (max-width: ${({theme}) => theme.breakpoint.mobile}px) {
    margin: auto;
    width: 90%;
    height: auto;
  }
`;

export const Input = styled.input`
  width: 429px;
  height: 54px;
  margin: 5px;
  border-radius: 10px;
  border: none;
  padding: 15px;

  @media (max-width: ${({theme}) => theme.breakpoint.mobile}px) {
    margin: auto;
    width: 90%;
    height: auto;
  }
`;

export const InputMessage = styled.input`
  width: 429px;
  height: 270px;
  margin: 5px;
  border-radius: 10px;
  border: none;
  padding: 15px;

  @media (max-width: ${({theme}) => theme.breakpoint.mobile}px) {
    margin: auto;
    width: 90%;
  }
`;


export const Button = styled.button`
width: 243px;
height: 45px;
border-radius: 32.5px;
margin-top: 15px;
border: solid 1px ${({theme}) => theme.colors.border.borderGrey};
background-color: ${({theme}) => theme.colors.background.backgroundGrey};
color: ${({theme}) => theme.colors.text.textMessageButton};

&:hover {
    cursor: pointer;
    filter: brightness(120%);
    transform: scale(1.1);
    transition: 1s;
}

&:active {
    filter: brightness(130%);
    border: 1px solid ${({theme}) => theme.colors.border.borderGrey};
}

@media (max-width: ${({theme}) => theme.breakpoint.mobile}px) {
    margin-bottom: 30px;
    width: 80%;
  }
`;