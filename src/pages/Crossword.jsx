import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useCallback, useState } from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

function Crossword() {
  const [password, setPassword] = useState("");
  const [alertText, setAlertText] = useState("");
  const [alertVariant, setAlertVariant] = useState("info");
  const [displayPlaylist, setDisplayPlaylist] = useState(false);
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
          break;
        case "iloveyou":
          setAlertVariant("success");
          setAlertText("You did it! Open Spotify and press play!");
          setDisplayPlaylist(true);
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
    <div>
      <p>
        Enter the password to unlock your surprise. Solve the{" "}
        <a
          href="https://puzzel.org/en/crossword/play?p=-NHM8hmDlHBrNOfm7yGk"
          target="_blank"
          rel="noreferrer"
        >
          crossword
        </a>{" "}
        for a clue.
      </p>
      {alertText && <Alert variant={alertVariant}>{alertText}</Alert>}
      {!displayPlaylist && (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="password">
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
    </div>
  );
}

export default Crossword;
