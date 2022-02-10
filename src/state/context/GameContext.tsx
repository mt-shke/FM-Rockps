import { createContext, useReducer } from "react";
import { GameActions } from "../actions-types";

const initialState = {
	status: "init",
	player: "none",
	house: "none",
	result: "none",
	score: 0,
};

// CreateContext
export const GameContext = createContext<{
	state: typeof initialState;
	dispatch: React.Dispatch<GameActions>;
}>({
	state: initialState,
	dispatch: () => {},
});

// Reducer
const reducer = (state: typeof initialState, action: GameActions) => {
	switch (action.type) {
		case "INIT":
			return {
				...state,
				status: "init",
				player: "none",
				house: "none",
				result: "none",
				score: state.score,
			};
		case "START":
			return {
				...state,
				status: "playing",
				player: action.payload.player,
				house: action.payload.house,
			};
		case "END":
			let result = "draw";

			// Case player ROCK
			if (state.player === "rock") {
				if (state.house === "paper") {
					result = "loose";
				}
				if (state.house === "scissors") {
					result = "win";
				}
			}

			// Case player PAPER
			if (state.player === "paper") {
				if (state.house === "scissors") {
					result = "loose";
				}
				if (state.house === "rock") {
					result = "win";
				}
			}

			// Case player SCISSORS
			if (state.player === "scissors") {
				if (state.house === "rock") {
					result = "loose";
				}
				if (state.house === "paper") {
					result = "win";
				}
			}

			return {
				...state,
				status: "end",
				result: result,
				score: state.score + (result === "win" ? 1 : 0),
			};
		default:
			return state;
	}
};

// Provider
interface GameProviderProps {
	children: React.ReactNode;
}

const GameProvider = ({ children }: GameProviderProps) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return <GameContext.Provider value={{ state, dispatch }}>{children}</GameContext.Provider>;
};

export default GameProvider;
