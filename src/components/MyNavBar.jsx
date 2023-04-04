import { Container,Nav,Navbar,Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Logo from '../pics/rupicon.png';
import {styled} from '@mui/material';


const MyLink = styled(Link)`
  text-decoration: none;
  color:white; 
  &:hover {
    font-weight:bold;
    color:white;
    text-decoration: underline;
    text-decoration-color: yellow;
    text-decoration-thickness: 4px;
  }
`


const MyNavBar=()=>{
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/"><Image src={Logo} roundedCircle width={40}/>MISSION <i>Rupayan</i></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto">
            <MyLink as={Link} to="/" className='px-3'>Home</MyLink>
            <MyLink as={Link} to="/about" className='px-3'>About</MyLink>
            <MyLink as={Link} to="/database" className='px-3'>Database</MyLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;