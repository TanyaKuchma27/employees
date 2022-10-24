import { useDispatch, useSelector } from 'react-redux';
import t from 'i18n/translate';
import { deleteBirthday, addBirthday, getBirthday } from 'redux/birthdaySlice';
import { Name, Form, Input, Text } from './Card.styled';

export const Card = (employee) => {
    const birthdayIds = useSelector(getBirthday.selectIds); 
    const dispatch = useDispatch();

    const removeDOB = event => {
        dispatch(deleteBirthday(event.target.name));
    } 

    const addDOB = () => {
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
                    <Text>{t('not_active')}</Text>
                </label>
                <label>
                    <Input
                        type="radio"
                        value={true}
                        name={employee.id}
                        onChange={addDOB}
                        checked={isSelected} />
                    <Text>{t('active')}</Text>
                </label>
            </Form>
        </>
    )
}