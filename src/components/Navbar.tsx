import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/Store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/About" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <button style={{ width: "2.5rem", height: "2.5rem"}} variant="outline-primary"
        className="rounded-circle bg-info bg-gradient">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 5H18.2768C19.0446 5 19.526 5.82948 19.1451 6.49614L16.5758 10.9923C16.2198 11.6154 15.5571 12 14.8394 12H8M8 12L6.45625 14.47C6.03997 15.136 6.51881 16 7.30425 16H18M8 12L4.05279 4.10557C3.714 3.428 3.02148 3 2.26393 3H2M8 20C8 20.5523 7.55228 21 7 21C6.44772 21 6 20.5523 6 20C6 19.4477 6.44772 19 7 19C7.55228 19 8 19.4477 8 20ZM18 20C18 20.5523 17.5523 21 17 21C16.4477 21 16 20.5523 16 20C16 19.4477 16.4477 19 17 19C17.5523 19 18 19.4477 18 20Z"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </Container>
    </NavbarBs>
  );
}