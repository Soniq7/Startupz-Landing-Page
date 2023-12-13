import styled from "styled-components";

export const Table = styled.table`
    width: 90%;
    text-align: left;
    font-size: 30px;
    padding: 30px;
    margin: 50px;
    table-layout: auto;

    @media (max-width: ${({theme}) => theme.breakpoint.mobile}px) {
        font-size: 15px;
        margin: auto;
        padding: 0px;
    }
`;

export const TableHeader = styled.th`
    position: relative;
    margin: 30px;
    color: ${({theme}) => theme.colors.text.primaryOrange};
    line-height: 30px;
    
    &::after {
        content: '';
        position: absolute;
        bottom: -20px;
        left: 0;
        width: 100%;
        height: 3px;
        background-image: linear-gradient(to right, ${({ theme }) =>
            theme.colors.border.borderGrey} 100%, transparent 0%);
        background-size: 50px 1px;
        background-repeat: no-repeat;
        background-position: left bottom;
    }
`;

export const TableCell = styled.td`
    width: auto;
    height: 114px;
    padding: 50px 60px 0px 0px;
    line-height: 38px;
    vertical-align: top;

    @media (max-width: ${({theme}) => theme.breakpoint.tabletHorizontal}px) {
        margin: auto;
        padding: 40px 20px 0px 0px;
    }

    @media (max-width: ${({theme}) => theme.breakpoint.mobile}px) {
        margin: auto;
        padding: 40px 20px 0px 0px;
    }
`;


