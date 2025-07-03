import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";

export default function ChessPracticeBoard() {
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState("start");

  const onDrop = (sourceSquare, targetSquare) => {
    const gameCopy = new Chess(game.fen());
    const move = gameCopy.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    if (move === null) return false;

    setGame(gameCopy);
    setFen(gameCopy.fen());
    return true;
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Chess Practice Board</h1>
      <Chessboard position={fen} onPieceDrop={onDrop} />
      <p style={{ marginTop: "1rem" }}>
        Move pieces and ask ChatGPT for help!
      </p>
    </div>
  );
}