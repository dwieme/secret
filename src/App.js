import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useCallback, useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const handlePasswordChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (password === "indigo llama yamaha") {
        alert("question");
      }
    },
    [password]
  );

  return (
    <div className="App">
      <h1>Enter the password for your surprise!</h1>
      <p>Solve the crossword for your first hint.</p>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter password"
          onChange={handlePasswordChange}
          value={password}
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <iframe
        title="spotify"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/5x0FQURm7BNvnmqWVcPDOC?utm_source=generator&theme=0"
        width="100%"
        height="380"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default App;
