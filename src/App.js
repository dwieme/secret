import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useCallback, useState } from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

function App() {
  const [password, setPassword] = useState("");
  const [alertText, setAlertText] = useState("");
  const [alertVariant, setAlertVariant] = useState("info");
  const [displayPlaylist, setDisplayPlaylist] = useState(false);
  const [displayHints, setDisplayHints] = useState(false);
  const handlePasswordChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();

      const normalizedPassword = password
        .toLowerCase()
        .trim()
        .replaceAll(/\s/g, "");

      switch (normalizedPassword) {
        case "iloveyou":
          setAlertVariant("warning");
          setAlertText(
            "Not quite! The crossword solution is only a hint. But here's some more hints if you need them..."
          );
          setDisplayHints(true);
          break;
        case "indigollamayamaha":
          setAlertVariant("success");
          setAlertText("You did it! Press play.");
          setDisplayPlaylist(true);
          setDisplayHints(false);
          break;
        default:
          break;
      }

      setPassword("");
    },
    [password]
  );

  return (
    <Container>
      <h1 className="pt-3">Enter the password to unlock your surprise!</h1>
      <p>
        Solve the{" "}
        <a
          href="https://puzzel.org/en/crossword/play?p=-NHM8hmDlHBrNOfm7yGk"
          target="_blank"
          rel="noreferrer"
        >
          crossword
        </a>{" "}
        for your first hint.
      </p>
      {alertText && <Alert variant={alertVariant}>{alertText}</Alert>}
      {displayHints && (
        <div>
          <details className="mb-3">
            <summary>2nd Hint</summary>
            <p>You made me a keychain with this on it.</p>
          </details>
          <details className="mb-3">
            <summary>3rd Hint</summary>
            <p>It's the name of our WiFi.</p>
          </details>
        </div>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter password"
            onChange={handlePasswordChange}
            value={password}
          />
        </Form.Group>
        <Button className="mb-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {displayPlaylist && (
        <iframe
          title="spotify"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/5x0FQURm7BNvnmqWVcPDOC?utm_source=generator&theme=0"
          width="100%"
          height="380"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      )}
    </Container>
  );
}

export default App;
