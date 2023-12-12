import styled from "styled-components";

const Button = styled.button`
    background-color: ${({theme}) => theme.colors.background.backgroundTeal};
    color: ${({theme}) => theme.colors.text.textWhite};
    border: none;
    width: 157px;
    height: 45px;
    border-radius: 32.5px;

    &:hover {
    cursor: pointer;
    filter: brightness(110%);
    transform: scale(1.1);
    transition: 1s;
}

&:active {
    filter: brightness(120%);
    border: 1px solid ${({theme}) => theme.colors.border.borderBlue};
}
`;


const ButtonTeal = ({ buttonContent }) => (
    <Button>{buttonContent}</Button>
);

export default ButtonTeal;