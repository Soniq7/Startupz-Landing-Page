import styled from "styled-components";

export const SectionTitle = styled.p`
  text-align: center;
  height: 50px;
  font-size: 50px;
  font-weight: bold;
  line-height: 50px;
  padding: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}px) {
    font-size: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    padding: 60px 0px 80px 0px;
  }
`;

export const StyledSection = styled.section`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(2, auto);
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    grid-template-columns: 1fr;
  }
`;

export const Tile = styled.div`
  width: 588px;
  height: 554px;
  box-shadow: 0px 8px 35px 0px ${({ theme }) => theme.colors.shadow.shadowCream};
  border-radius: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;

  &:hover {
    transform: scale(1.05);
    transition: 1s;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}px) {
    width: calc(100% - 40px);
    margin-left: auto;
    margin-right: auto;
    height: auto;
  }
`;

export const Title = styled.h2`
  color: ${({ $color }) => $color};
  height: 30px;
  font-size: 32px;
  font-weight: bold;
  line-height: 30px;
  margin-bottom: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}px) {
    font-size: 30px;
    line-height: 26px;
  }
`;

export const Text = styled.p`
  width: 387px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}px) {
    width: 100%;
    font-size: 14px;
    line-height: 18px;
  }
`;

export const TileImage = styled.img`
  width: 371px;
  height: 244px;
  margin-bottom: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}px) {
    width: 100%;
    height: auto;
  }
`;

export const TextImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 150px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVertical}px) {
    padding: 80px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 60px 20px 60px 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    padding: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    padding: 0px 10px 50px 10px;
  }
`;
