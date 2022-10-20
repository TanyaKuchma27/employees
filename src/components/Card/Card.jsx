import { useState } from 'react';
import { Name, Form, Input, Text } from './Card.styled';

export const Card = ({ id, firstName, lastName }) => {
    const [isActive, setIsActive] = useState(false);  

    const onChangeValue = (e) => {
        setIsActive(JSON.parse(e.target.value));
    } 

    return (
        <>
            <Name isActive={isActive}>{firstName} {lastName}</Name>
            <Form>
                <label>
                    <Input type="radio" value={false} name={id} onChange={onChangeValue} />
                    <Text>not active</Text>
                </label>
                <label>
                    <Input type="radio" value={true} name={id} onChange={onChangeValue} />
                    <Text>active</Text>
                </label>
            </Form>
        </>
    )
}