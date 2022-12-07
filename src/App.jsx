import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <h1 className="pt-3">Laura's Holiday Surprise</h1>
      <Outlet />
    </Container>
  );
}

export default App;
