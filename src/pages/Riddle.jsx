import "./Riddle.css";
import { Link } from "react-router-dom";

function Riddle() {
  return (
    <div>
      <pre>
        {`
        Before we can start this puzzle
        To get your holiday surprise
        We must go somewhere for a nuzzle
        Though you might not believe your eyes

        We often walk past this on date night
        All dressed in twinkling lights
        It really is such a beautiful sight
        On these cold winter nights

        So let's go to this bench
        And pray we don't get drenched
        To solve the next step of this conundrum
        `}
      </pre>
      <p>Press continue once you're there!</p>
      <Link to="/crossword">Continue</Link>
    </div>
  );
}

export default Riddle;
