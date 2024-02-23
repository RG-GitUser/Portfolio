import { Container, Header, Menu , Segment} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { header } from './header.css'

function Navbar() {
  return (
    <Segment textAlign="center" verticalAlign="middle" mobile="16" tablet="8" computer="4">
    <Container fluid style={{maxWidth: '1200px'}}>
      <Menu vertical>
        <Header as='h1' textAlign='center'>
          Riley Gaffney
        </Header>
        <Menu.Item as={Link} to="/" active={window.location.pathname === '/'}>About</Menu.Item>
        <Menu.Item as={Link} to="/contact" active={window.location.pathname === '/contact'}>Contact</Menu.Item>
        <Menu.Item as={Link} to="/portfolio" active={window.location.pathname === '/portfolio'}>Portfolio</Menu.Item>
        <Menu.Item as={Link} to="/resume" active={window.location.pathname === '/resume'}>Resume</Menu.Item>
      </Menu>
    </Container>
    </Segment>
  );
}

export default Navbar;
