import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export function Navigationbar({ userprops, children }) {
  console.log(userprops);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          {" "}
          {children}
          <Navbar.Brand href="#home">{userprops.name}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
