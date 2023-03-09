
import { AppBar, Toolbar, styled} from '@mui/material'; 
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Component = styled(AppBar)`
    background: #0D263B;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: right;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`

const Header = () => {
    return (
            <Component>
                <Container>
                    <Link to='/'>HOME</Link>
                    <Link to='/about'>ABOUT</Link>
                    <Link to='/contact'>CONTACT</Link>
                    <Link to='/account'>LOGOUT</Link>
                </Container>
            </Component>
    )
}

export default Header;
