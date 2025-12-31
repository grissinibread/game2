import {useState} from "react";

function App() {
    const [state, setState] = useState("player");

    return (
      <>
          <div className={"gameCard"}>
              <h1>Correlations</h1>
              <section id={"difficulty"}>
                  {state === "player" && <Player goToDifficulty={() => setState("difficulty")} />}
                  {state === "difficulty" && <Difficulty
                      goToEasyInput={() => setState("easyInput")}
                      goToMediumInput={() => setState("mediumInput")}
                      goToHardInput={() => setState("hardInput")}/>}

                  {state === "easyInput" && <EasyInput />}
                  {state === "mediumInput" && <MediumInput />}
                  {state === "hardInput" && <HardInput />}
              </section>
          </div>
      </>
  );
}

type PlayerProps = {
    goToDifficulty: () => void;
}

function Player({ goToDifficulty }: PlayerProps) {
    return (
        <>
            <button className={"difficultyButton"} onClick={goToDifficulty}>1 Player</button>
            <button className={"difficultyButton"}>2 Player</button>
        </>
    );
}

type DifficultyProps = {
    goToEasyInput: () => void;
    goToMediumInput: () => void;
    goToHardInput: () => void;
}

function Difficulty({ goToEasyInput, goToMediumInput, goToHardInput }: DifficultyProps) {
    return (
        <>
            <button className={"difficultyButton"} onClick={goToEasyInput}>Easy</button>
            <button className={"difficultyButton"} onClick={goToMediumInput}>Medium</button>
            <button className={"difficultyButton"} onClick={goToHardInput}>Hard</button>
        </>
    );
}

function EasyInput() {
    return (
        <>
            <p>Hint Word</p>
            <input type="text"/>

            <p>Guess Words</p>
            {Array.from({length: 3}).map((_, index) => (
                <input key={index} type="text"/>
            ))}

            <button>Submit</button>
        </>
    );
}

function MediumInput() {
    return (
        <>
            <p>Hint Word</p>
            <input type="text"/>

            <p>Guess Words</p>
            {Array.from({length: 5}).map((_, index) => (
                <input key={index} type="text"/>
            ))}

            <button>Submit</button>
        </>
    );
}

function HardInput() {
    return (
        <>
            <p>Hint Word</p>
            <input type="text"/>

            <p>Guess Words</p>
            {Array.from({length: 7}).map((_, index) => (
                <input key={index} type="text"/>
            ))}

            <button>Submit</button>
        </>
    );
}

export default App;