import styled from '@emotion/styled';

export const Name = styled.p`
    color: ${props =>
        props.isActive ? '#ffffff' : '#000000'
        };
    font-weight: bold;
    margin-bottom: 8px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column; 
    align-items: flex-start;    
    justify-content: center;
`;

export const Input = styled.input`
    
`;

export const Text = styled.span`
    margin-left: 8px;
`;