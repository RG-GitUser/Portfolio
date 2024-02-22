import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <div className="flex-column">
      <Nav defaultActiveKey="/" className="flex-column">
        <Nav.Link href="/">About</Nav.Link>
      </Nav>
      <Nav defaultActiveKey="/" className="flex-column">
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
      <Nav defaultActiveKey="/" className="flex-column">
        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
      </Nav>
      <Nav defaultActiveKey="/" className="flex-column">
        <Nav.Link href="/resume">
          Resume
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Navbar;
