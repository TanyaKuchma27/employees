import { Employees } from 'components/Employees';
import { Birthday } from 'components/Birthday';
import { LOCALES } from 'i18n/locales'
// import { Select, Container, Left, Right } from './Page.styled';

export const Page = ({ currentLocale, handleChange }) => {
    const languages = [
        { name: 'English', code: LOCALES.ENGLISH },
        { name: 'Русский', code: LOCALES.RUSSIAN },
        { name: 'Українська', code: LOCALES.UKRANIAN },
        { name: 'Deutsche', code: LOCALES.GERMAN }
    ]

    return (
        <>
            <select onChange={handleChange} value={currentLocale} class="mt-2 ml-2">
                {languages.map(({ name, code }) => (
                    <option key={code} value={code}>
                        {name}
                    </option>
                ))}
            </select>
            <div class="flex">
                <div class="w-3/4">
                    <Employees/>
                </div>
                <div class="w-1/4">
                    <Birthday/>
                </div>
            </div>
        </>
    )
}