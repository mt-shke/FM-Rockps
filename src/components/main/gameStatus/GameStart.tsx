import { useEffect, useState } from "react";
import { GameActions, GamePick, GameState } from "../../../state/actions-types";
import Circle from "../../circles/Circle";

interface GameStartProps {
	dispatch: (value: GameActions) => void;
	state: GameState;
}

const GameStart: React.FC<GameStartProps> = ({ state, dispatch }) => {
	const [housePick, setHousePick] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setHousePick(true);
		}, 500);
		setTimeout(() => {
			dispatch({ type: "END" });
		}, 1000);
	}, []);

	return (
		<main className="relative grid grid-cols-2 gap-4 justify-center w-5/6 my-24 font-barlow tracking-wider font-bold md:gap-0">
			<div className="flex flex-col items-center gap-12 mx-auto">
				<h2 className="whitespace-nowrap">YOU PICKED</h2>
				<div className="mx-auto">
					<Circle icon={state.player as GamePick} size="large" />
				</div>
			</div>
			<div className="flex flex-col items-center gap-12 mx-auto">
				<h2 className="whitespace-nowrap">THE HOUSE PICKED</h2>
				{!housePick && (
					<div className="grid place-items-center h-full w-full">
						<div className=" h-2/3 aspect-square rounded-full bg-neutral-900 opacity-30"></div>
					</div>
				)}
				{housePick && (
					<div className="mx-auto">
						<Circle icon={state.house as GamePick} size="large" />
					</div>
				)}
			</div>
		</main>
	);
};
export default GameStart;
