import styled from "styled-components";

const Main = styled.main`
    max-width: 1440px;
    margin: 0 auto;
    padding: 20px;
`;

const Conatiner = ({ children }) => (
    <Main>
        {children}
    </Main>
);

export default Conatiner;