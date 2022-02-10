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
		<main className="relative grid grid-cols-2 gap-8 justify-center w-5/6 my-24 mx-auto font-barlow tracking-wider font-bold md:flex md:gap-0 md:items-center md:5/6">
			<div className="flex flex-col items-center gap-12 mx-auto md:mx-0 md:w-full">
				<h2 className="whitespace-nowrap">YOU PICKED</h2>
				<div>
					<Circle icon={state.player as GamePick} size="large" win={state.result === "win"} />
				</div>
			</div>
			<div className="absolute z-20 -bottom-32 mx-auto w-full flex flex-col items-center justify-center gap-4 md:static md:w-fit">
				<h1 className="text-4xl whitespace-nowrap">{gameResult}</h1>
				<div
					onClick={() => dispatch({ type: "INIT" })}
					className="py-2 px-10 bg-white text-black rounded-md whitespace-nowrap hover:cursor-pointer"
				>
					PLAY AGAIN
				</div>
			</div>
			<div className="flex flex-col items-center gap-12 mx-auto md:mx-0 md:w-full">
				<h2 className="whitespace-nowrap">THE HOUSE PICKED</h2>
				<div>
					<Circle icon={state.house as GamePick} size="large" win={state.result === "loose"} />
				</div>
			</div>
		</main>
	);
};
export default GameEnd;
