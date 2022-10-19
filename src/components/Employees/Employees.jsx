import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../../redux/operations";
import { getEmployees } from "../../redux/emploeesSlice";
import getAlphabet from "utils/alphabet";
import { Card } from '../Card';
import { Title, List, Item, Letter, Text, CardItem} from './Employees.styled';

export const Employees = () => {
    const dispatch = useDispatch();
    const employees = useSelector(getEmployees.selectAll); 
    const alphabet = getAlphabet();
    const isLoading = useSelector(({ employees }) => employees.isLoading); 

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    console.log(employees);
    console.log(alphabet);  

    let employeesByLetter = []

    if (employees) {
        employeesByLetter = alphabet.map(letter => (
            employees?.filter(item => item.firstName[0] === letter)
        ));        
    }  
    
    return (
        <>
            <Title>Employees</Title>
            <List>  
                {isLoading && <h2>Loading...</h2>} 
                {(employees.length > 0) && alphabet.map((letter, idx) => (
                    (employeesByLetter[idx].length > 0) ? (
                        <Item key={idx}>
                            <Letter>{letter}</Letter>
                            <ul>
                                {employeesByLetter[idx].map(employee => (
                                    <CardItem key={employee.id}><Card {...employee}/> </CardItem>
                                ))}
                            </ul>
                        </Item>
                    ) : (
                        <Item key={idx}>
                            <Letter>{letter}</Letter>
                            <Text>No Employees</Text>
                        </Item>
                    )
                ))}
            </List>
        </>
    )
}