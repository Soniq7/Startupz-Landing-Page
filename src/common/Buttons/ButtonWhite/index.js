import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.background.backgroundWhite};
  color: ${({ theme }) => theme.colors.text.textTeal};
  width: ${({ width }) => width || "auto"};
  height: 45px;
  border-radius: 32.5px;
  border: solid 1px ${({ theme }) => theme.colors.border.borderBlue};

  &:hover {
    cursor: pointer;
    filter: brightness(110%);
    transform: scale(1.1);
    transition: 1s;
  }

  &:active {
    filter: brightness(120%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin: 30px;
  }
`;

const ButtonWhite = ({ buttonContent, width }) => {
  return (
    <Button width={width}>
      {buttonContent}
    </Button>
  );
};
export default ButtonWhite;
