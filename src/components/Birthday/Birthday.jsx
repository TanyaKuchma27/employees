import { useSelector } from "react-redux";
import { FormattedDate } from 'react-intl';
import { getBirthday } from "redux/birthdaySlice";
import { Title, List, Month, MonthName, Item } from './Birthday.styled';
import { months } from '../../utils/months';
import t from 'i18n/translate';

export const Birthday = () => {
    const birthday = useSelector(getBirthday.selectAll);
    
    const employeesByMonth = months.map(month => (
        birthday.filter(item => ((new Date(item.dob)).getMonth()) === month.id)
    ));    
    
    return (
        <>
            <Title>{t('employees_birthday')}</Title>
            {(birthday.length > 0) ? (
                <List>
                    {months.map((month, idx) => (
                        (employeesByMonth[idx].length > 0) ? (
                            <Month key={month.id}>
                                <MonthName>{t((month.name).toLowerCase())}</MonthName>
                                <ul>
                                    {employeesByMonth[idx].map(item =>
                                        <Item key={item.id}>
                                            <p>
												{`${item.lastName} ${item.firstName} - `}
												<FormattedDate value={item.dob} day='numeric'/>{' '}
												<FormattedDate value={item.dob} month='long'/>{', '}
                                                <FormattedDate value={item.dob} year='numeric' />{' '}
                                                {t('year')}                       
                                            </p>
                                        </Item>)}
                                </ul>
                            </Month>
                        ) : (
                            <Month key={month.id}>
                                <MonthName>{t((month.name).toLowerCase())}</MonthName>
                                <p>{t('no_employees')}</p>
                            </Month>
                        )
                    ))}
                    </List>
            ) : (<p>{t('empty_list')}</p>)}            
        </>
    )
}