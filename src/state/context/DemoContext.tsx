import { createContext, useReducer } from "react";

// simple context demo

const initialState = {
	status: "init",
	score: 0,
};

type Action = { type: "INIT" } | { type: "END"; payload: { score: 1 } };

export const GContext = createContext<{
	state: typeof initialState;
	dispatch: React.Dispatch<Action>;
}>({
	state: initialState,
	dispatch: () => {},
});

const reducer = (state: typeof initialState, action: Action) => {
	switch (action.type) {
		case "INIT":
			return {
				...state,
				status: "init",
			};
		case "END":
			return {
				...state,
				status: "end",
				score: state.score + action.payload.score,
			};
		default:
			throw new Error("Wrong command");
	}
};

interface GameProviderProps {
	children: React.ReactNode;
}

const GProvider = ({ children }: GameProviderProps) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return <GContext.Provider value={{ state, dispatch }}>{children}</GContext.Provider>;
};

export default GProvider;
