import { GameActions, GamePick } from "../../../state/actions-types";
import Circle from "../../circles/Circle";

interface GameInitProps {
	dispatch: (value: GameActions) => void;
}

const GameInit: React.FC<GameInitProps> = ({ dispatch }) => {
	const picks: GamePick[] = ["rock", "paper", "scissors"];

	// Select random house pick
	const chooseHousePick = (): GamePick => {
		return picks[Math.floor(Math.random() * 3)];
	};
	const housePick = chooseHousePick();

	const startGame = (event: React.MouseEvent<HTMLElement>) => {
		const target = event.target as HTMLElement;

		if (target.closest("div")?.classList.contains("pick-paper")) {
			dispatch({ type: "START", payload: { player: "paper", house: housePick } });
		}

		if (target.closest("div")?.classList.contains("pick-scissors")) {
			dispatch({ type: "START", payload: { player: "scissors", house: housePick } });
		}

		if (target.closest("div")?.classList.contains("pick-rock")) {
			dispatch({ type: "START", payload: { player: "rock", house: housePick } });
		}
	};
	return (
		<main className="relative grid items-center justify-center grid-cols-3 grid-rows-3 aspect-[5/4] my-16 mx-auto">
			<img
				className="absolute w-full aspect-square p-14 object-contain"
				src="/images/bg-triangle.svg"
				alt="triangle background"
			/>
			<div className="mx-auto col-start-1 col-end-2 row-start-1 row-end-2">
				<Circle onClick={(e) => startGame(e)} icon="paper" size="small" />
			</div>
			<div className="mx-auto col-start-3 col-end-4 row-start-1 row-end-2">
				<Circle onClick={(e) => startGame(e)} icon="scissors" size="small" />
			</div>
			<div className="mx-auto col-start-2 col-end-3 row-start-3 row-end-4">
				<Circle onClick={(e) => startGame(e)} icon="rock" size="small" />
			</div>
		</main>
	);
};
export default GameInit;
