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
  // const [displayHints, setDisplayHints] = useState(false);
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
        case "indigollamayamaha":
          setAlertVariant("warning");
          setAlertText("Not quite! The crossword solution is only a hint.");
          // setDisplayHints(true);
          break;
        case "iloveyou":
          setAlertVariant("success");
          setAlertText("You did it! Open Spotify and press play!");
          setDisplayPlaylist(true);
          // setDisplayHints(false);
          break;
        default:
          setAlertText("");
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
        for your clue.
      </p>
      {alertText && <Alert variant={alertVariant}>{alertText}</Alert>}
      {/* {displayHints && (
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
      )} */}
      {!displayPlaylist && (
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
      )}
      {displayPlaylist && (
        <a
          href="https://open.spotify.com/playlist/5x0FQURm7BNvnmqWVcPDOC"
          target="_blank"
          rel="noreferrer"
        >
          Open Spotify
        </a>
      )}
    </Container>
  );
}

export default App;
