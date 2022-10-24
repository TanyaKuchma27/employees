import { Employees } from 'components/Employees';
import { Birthday } from 'components/Birthday';
import { LOCALES } from 'i18n/locales'
import { Select, Container, Left, Right } from './Page.styled';

export const Page = ({ currentLocale, handleChange }) => {
    const languages = [
        { name: 'English', code: LOCALES.ENGLISH },
        { name: 'Русский', code: LOCALES.RUSSIAN },
        { name: 'Українська', code: LOCALES.UKRANIAN },
        { name: 'Deutsche', code: LOCALES.GERMAN }
    ]

    return (
        <>
            <Select onChange={handleChange} value={currentLocale}>
                {languages.map(({ name, code }) => (
                    <option key={code} value={code}>
                        {name}
                    </option>
                ))}
            </Select>
            <Container>
                <Left>
                    <Employees/>
                </Left>
                <Right>
                    <Birthday/>
                </Right>
            </Container>
        </>
    )
}