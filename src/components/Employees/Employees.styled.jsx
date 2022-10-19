import styled from '@emotion/styled';

export const Title = styled.h2`
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center;
    color: #521a1a;
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Item = styled.li`
    margin: 12px;
    padding: 10px;
    width: calc((100% - 12 * 12px) / 6);
    background: #862a2a;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 2px 1px rgba(0, 0, 0, 0.2), 0px 4px 4px 0px #00000040;
    border-radius: 4px;
`;

export const Letter = styled.h3`
    margin-bottom: 10px;
    color: #c9b3b3;
`;

export const Text = styled.p`
    color: #b3b8c9;
`;