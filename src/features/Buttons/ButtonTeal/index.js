import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.background.backgroundTeal};
  color: ${({ theme }) => theme.colors.text.textWhite};
  border: none;
  border-radius: 32.5px;
  font-size: 18px;
  width: ${({ width }) => width || "auto"};
  margin: ${({ $custom }) => $custom || "auto"};
  height: 45px;

  &:hover {
    cursor: pointer;
    filter: brightness(110%);
    transform: scale(1.1);
    transition: 1s;
  }

  &:active {
    filter: brightness(120%);
    border: 1px solid ${({ theme }) => theme.colors.border.borderBlue};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-bottom: 30px;
    width: 80%;
  }
`;

const ButtonTeal = ({ buttonContent, width, $custom }) => (
  <Button width={width} $custom={$custom}>
    {buttonContent}
  </Button>
);

export default ButtonTeal;
