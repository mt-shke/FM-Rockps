import { useContext } from "react";
import { GamePick } from "../../../state/actions-types";
import { GameContext } from "../../../state/context/GameContext";
import Circle from "../../circles/Circle";

const GameEnd: React.FC = () => {
	// consume context directly without props
	const gameCtx = useContext(GameContext);
	const dispatch = gameCtx.dispatch;
	const state = gameCtx.state;
	const gameResult = state.result === "win" ? "YOU WIN" : state.result === "loose" ? "YOU LOSE" : "DRAW";

	return (
		<main className="relative grid grid-cols-2 gap-8 justify-center w-5/6 my-24 mx-auto font-barlow tracking-wider font-bold md:gap-24">
			<div className="flex flex-col items-center gap-12 mx-auto">
				<h2 className="whitespace-nowrap">YOU PICKED</h2>
				<div>
					<Circle icon={state.player as GamePick} size="large" win={state.result === "win"} />
				</div>
			</div>
			<div className="absolute -bottom-32 mx-auto w-full md:bottom-[40%] z-20 flex flex-col items-center justify-center gap-4">
				<h1 className="text-4xl whitespace-nowrap">{gameResult}</h1>
				<div
					onClick={() => dispatch({ type: "INIT" })}
					className="py-2 px-10 bg-white text-black rounded-md hover:cursor-pointer"
				>
					PLAY AGAIN
				</div>
			</div>
			<div className="flex flex-col items-center gap-12 mx-auto">
				<h2 className="whitespace-nowrap">THE HOUSE PICKED</h2>
				<div>
					<Circle icon={state.house as GamePick} size="large" win={state.result === "loose"} />
				</div>
			</div>
		</main>
	);
};
export default GameEnd;
