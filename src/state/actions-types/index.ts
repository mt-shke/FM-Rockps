// Game Types
export type GameType = "INIT" | "START" | "END";
export type GameStatus = "init" | "playing" | "end";
export type GamePick = "paper" | "scissors" | "rock";
export type GameResult = "win" | "draw" | "loose";

// Game State
export type GameState = {
	status: GameStatus;
	player: GamePick | "none";
	house: GamePick | "none";
	result: GameResult | "none";
	score: number;
};

//  Actions-Types
export type GameInitAction = {
	type: "INIT";
};

export type GameStartAction = {
	type: "START";
	payload: {
		player: GamePick;
		house: GamePick;
	};
};

export type GameEndAction = {
	type: "END";
};

// Game Actions Types
export type GameActions = GameInitAction | GameStartAction | GameEndAction;
