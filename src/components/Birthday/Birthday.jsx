import { useSelector } from "react-redux";
import { getBirthday } from "redux/birthdaySlice";
import { Title, List, Text } from './Birthday.styled';

export const Birthday = () => {
    const birthday = useSelector(getBirthday.selectAll);

    return (
        <>
            <Title>Employees birthday</Title>
            {(birthday.length > 0) ? (
                <ul>
                    {birthday.map(item =>
                        <List key={item.id}>{item.lastName} {item.firstName} - {item.dob}</List>)}
                </ul>
            ) : (<Text>Employees List is empty</Text>)}
        </>
    )
}