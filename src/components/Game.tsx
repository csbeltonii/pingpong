import React from "react";
import { Player } from "./classes";
import PlayerCard from "./PlayerCard";

const Game = () => {
  const [playerOne, setPlayerOne] = React.useState<Player>(
    new Player("Craig", 0)
  );

  const [playerTwo, setPlayerTwo] = React.useState<Player>(
    new Player("Kristen", 0)
  );

  const [playerOneScore, setPlayerOneScore] = React.useState<number>(
    playerOne.score
  );

  const [playerTwoScore, setPlayerTwoScore] = React.useState<number>(
    playerTwo.score
  );

  const increasePlayerOneScore = (playerOne: Player) => {
    playerOne.increaseScore();
    setPlayerOneScore(playerOne.score);
  };

  const decreasePlayerOneScore = (playerOne: Player) => {
    if (playerOne.score > 0) {
      playerOne.decreaseScore();
      setPlayerOneScore(playerOne.score);
    }
  };

  const increasePlayerTwoScore = (playerTwo: Player) => {
    playerTwo.increaseScore();
    setPlayerTwoScore(playerTwo.score);
  };

  const decreasePlayerTwoSCore = (playerTwo: Player) => {
    if (playerTwo.score > 0) {
      playerTwo.decreaseScore();
      setPlayerTwoScore(playerTwo.score);
    }
  };

  return (
    <div className="container d-flex flex-column p-1">
      <h1 className="h1">PING PONG LET'S GO</h1>
      <div className="container d-flex justify-content-center">
        <div className="d-flex">
          <div className="card m-3">
            <PlayerCard
              playerName={playerOne.name}
              playerScore={playerOne.score}
              playerNumber={1}
            />
            <div className="d-flex flex-column justify-content-center p-2">
              <button
                type="button"
                className="btn btn-primary mb-3"
                onClick={() => increasePlayerOneScore(playerOne)}
              >
                Add Point
              </button>
              <button
                type="button"
                className="btn btn-primary mb-3"
                onClick={() => decreasePlayerOneScore(playerOne)}
              >
                Remove Point
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className="card m-3">
            <PlayerCard
              playerName={playerTwo.name}
              playerScore={playerTwo.score}
              playerNumber={2}
            />
            <div className="d-flex flex-column justify-content-center p-2">
              <button
                type="button"
                className="btn btn-primary mb-3"
                onClick={() => increasePlayerTwoScore(playerTwo)}
              >
                Add Point
              </button>
              <button
                type="button"
                className="btn btn-primary mb-3"
                onClick={() => decreasePlayerTwoSCore(playerTwo)}
              >
                Remove Point
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
