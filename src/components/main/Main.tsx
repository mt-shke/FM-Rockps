import { GameContext } from "../../state/context/GameContext";
import { useContext, useState } from "react";
import GameInit from "./gameStatus/GameInit";
import GameStart from "./gameStatus/GameStart";
import GameEnd from "./gameStatus/GameEnd";
import { GameState } from "../../state/actions-types";

const Main: React.FC = () => {
	const gameCtx = useContext(GameContext);
	const gameState = gameCtx.state;

	if (gameState.status === "init") {
		return <GameInit dispatch={gameCtx.dispatch} />;
	}
	if (gameState.status === "playing") {
		return <GameStart state={gameState as GameState} dispatch={gameCtx.dispatch} />;
	}
	if (gameState.status === "end") {
		return <GameEnd />;
	}
	return <GameInit dispatch={gameCtx.dispatch} />;
};

export default Main;
