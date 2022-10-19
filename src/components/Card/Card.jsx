import { useState } from 'react';
import { Name, Form } from './Card.styled';

export const Card = ({ id, firstName, lastName }) => {
    const [isActive, setIsActive] = useState(false);  

    const onChangeValue = (e) => {
        setIsActive(e.target.value);
        console.log(e.target.name);
    } 

    return (
        <>
            <Name isActive={isActive}>{firstName} {lastName} {isActive }</Name>
            <Form>
                <input type="radio" value="false" name={id} onChange={onChangeValue} /> not active
                <input type="radio" value="true" name={id} onChange={onChangeValue} /> active                
            </Form>
        </>
    )
}