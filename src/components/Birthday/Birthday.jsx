import { useSelector } from "react-redux";
import { getBirthday } from "redux/birthdaySlice";
import { Title, List, Month, MonthName, Item } from './Birthday.styled';
import { months } from '../../utils/months';

export const Birthday = () => {
    const birthday = useSelector(getBirthday.selectAll);
    
    const employeesByMonth = months.map(month => (
        birthday.filter(item => ((new Date(item.dob)).getMonth()) === month.id)
    )); 

    const options = { year: 'numeric', month: 'long', day: 'numeric' };   
    
    return (
        <>
            <Title>Employees birthday</Title>
            {(birthday.length > 0) ? (
                <List>
                    {months.map((month, idx) => (
                        (employeesByMonth[idx].length > 0) ? (
                            <Month key={month.id}>
                                <MonthName>{month.name}</MonthName>
                                <ul>
                                    {employeesByMonth[idx].map(item =>
                                        <Item key={item.id}>
                                            <p>{item.lastName} {item.firstName} - {(new Intl.DateTimeFormat('en-GB', options).format(new Date(item.dob)))} year</p>
                                        </Item>)}
                                </ul>
                            </Month>
                        ) : (
                            <Month key={month.id}>
                                <MonthName>{month.name}</MonthName>
                                <p>No Employees</p>
                            </Month>
                        )
                    ))}
                    </List>
                ) : (<p>Employees List is empty</p>)}            
        </>
    )
}