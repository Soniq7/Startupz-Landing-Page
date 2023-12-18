import styled from "styled-components";

export const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 46px;
  margin-left: 110px;
  max-width: 100%;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-left: auto;
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
  font-size: 18px;
  margin-right: 100px;
  max-width: 100%;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: auto;
  }
`;

export const LogoImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const StyledLink1 = styled.a``;

export const StyledLink2 = styled.a``;
