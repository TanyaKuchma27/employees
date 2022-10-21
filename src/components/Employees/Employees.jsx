import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../../redux/operations";
import { getEmployees } from "../../redux/emploeesSlice";
import { alphabet } from "utils/alphabet";
import { Card } from '../Card';
import { Title, List, Item, Letter, Text, CardItem} from './Employees.styled';

export const Employees = () => {
    const dispatch = useDispatch();
    const employees = useSelector(getEmployees.selectAll);
    const isLoading = useSelector(({ employees }) => employees.isLoading); 

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    let employeesByLetter = []

    if (employees) {
        employeesByLetter = alphabet.map(item => (
            employees?.filter(employee => employee.firstName[0] === item.letter)
        ));        
    }  

    console.log(employeesByLetter)

    return (
        <>
            <Title>Employees</Title>
            <List>  
                {isLoading && <h2>Loading...</h2>} 
                {(employees.length > 0) && alphabet.map((item, idx) => (
                    (employeesByLetter[idx].length > 0) ? (
                        <Item key={item.id}>
                            <Letter>{item.letter}</Letter>
                            <ul>
                                {employeesByLetter[idx].map(employee => (
                                    <CardItem key={employee.id}><Card {...employee} /> </CardItem>
                                ))}
                            </ul>
                        </Item>
                    ) : (
                        <Item key={item.id}>
                            <Letter>{item.letter}</Letter>
                            <Text>No Employees</Text>
                        </Item>
                    )
                ))}
            </List>
        </>
    )
}