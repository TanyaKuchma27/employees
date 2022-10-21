import { Employees } from 'components/Employees';
import { Birthday } from 'components/Birthday';
import { Container, Left, Right } from './Page.styled';

export const Page = () => {

    return (
        <Container>
            <Left>
                <Employees/>
            </Left>
            <Right>
                <Birthday/>
            </Right>
        </Container>
    )
}