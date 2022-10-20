import { useDispatch, useSelector } from 'react-redux';
import { deleteBirthday, addBirthday, getBirthday } from 'redux/birthdaySlice';
import { Name, Form, Input, Text } from './Card.styled';

export const Card = (employee) => {
    const birthdayIds = useSelector(getBirthday.selectIds); 
    const dispatch = useDispatch();

    const removeDOB = e => {
        dispatch(deleteBirthday(e.target.name));
    } 

    const addDOB = e => {
        dispatch(addBirthday(employee));
    } 

    const isSelected = birthdayIds.includes(employee.id)

    return (
        <>
            <Name isActive={isSelected}>{employee.firstName} {employee.lastName}</Name>
            <Form>
                <label>
                    <Input
                        type="radio"
                        value={false}
                        name={employee.id}
                        onChange={removeDOB}
                        checked={!isSelected} />
                    <Text>not active</Text>
                </label>
                <label>
                    <Input
                        type="radio"
                        value={true}
                        name={employee.id}
                        onChange={addDOB}
                        checked={isSelected} />
                    <Text>active</Text>
                </label>
            </Form>
        </>
    )
}