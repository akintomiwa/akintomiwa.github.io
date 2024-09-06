import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';

function Main(props) {
    return(
        <Container>
            <h1 className="text-center">Hello, and welcome!</h1>
            <p>
                This is the Hero landing page.
            </p>
            {/* <Button align="center" variant="primary">Contact me</Button> */}
        </Container> 
    );
}

export default Main;

// function Main(props) {
//     return <h2> Message: {props.welcomeMessage}</h2>;
// }