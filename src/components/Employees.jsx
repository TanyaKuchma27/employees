import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../redux/operations";
import { getEmployees } from "../redux/emploeesSlice";
import getAlphabet from "utils/alphabet";

const Employees = () => {
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
            {isLoading && <h2>Loading...</h2>} 
            {(employees.length > 0) && alphabet.map((letter, idx) => (
                (employeesByLetter[idx].length > 0) ? (
                    <div key={idx}>
                        <p >{letter}</p>
                        {employeesByLetter[idx].map(item => (
                            <h3 key={item.id}>{item.firstName} { item.lastName}</h3>
                        ))}
                    </div>
                ) : (
                        <div key={idx}>
                            <p >{letter}</p>
                            <h2>empty</h2>
                        </div>
                )
            ))}
        </>
    )
}

export default Employees