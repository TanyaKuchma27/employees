import styled from 'styled-components/macro';

export const Name = styled.p`
    color: ${props =>
        props.isActive ? '#000000' : '#ffffff'
        }
`;

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;     
`;