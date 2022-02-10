import { useContext } from "react";
import { GameContext } from "../state/context/GameContext";

const Score: React.FC = () => {
	const gameCtx = useContext(GameContext);

	return (
		<header className="flex justify-between w-11/12 mx-auto my-6 p-4 border-2 border-gray-400 rounded-xl md:my-12 md:h-[200px] md:w-[800px] md:p-8">
			<img src="/images/logo.svg" alt="logo" />
			<div className="flex justify-center items-center flex-col w-28 md:w-52 h-full rounded-xl bg-white text-black">
				<h2 className="text-xl text-blue-900">SCORE</h2>
				<h2 className="text-7xl text-gray-600">{gameCtx.state.score}</h2>
			</div>
		</header>
	);
};
export default Score;
