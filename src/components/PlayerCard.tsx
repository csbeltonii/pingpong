import React from "react";
import { Player } from "./classes";

interface Props {
  playerName: string;
  playerScore: number;
  playerNumber: number;
}

const PlayerCard = ({ playerName, playerScore, playerNumber }: Props) => {
  return (
    <div className="p-5">
      <div className="card-title">
        Player {playerNumber}: <span>{playerName}</span>
      </div>
      <div className="card-body">
        Score: <span>{playerScore}</span>
      </div>
    </div>
  );
};

export default PlayerCard;
