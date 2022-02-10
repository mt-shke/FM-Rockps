import { GamePick } from "../../state/actions-types";
interface CircleProps {
	icon: GamePick;
	size: "small" | "large";
	win?: boolean;
	onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Circle: React.FC<CircleProps> = ({ onClick, icon, size, win }) => {
	let radial, shadow;
	if (icon === "paper") {
		radial = "radial-paper";
		shadow = "bg-blue-700";
	}
	if (icon === "rock") {
		radial = "radial-rock";
		shadow = "bg-red-700";
	}
	if (icon === "scissors") {
		radial = "radial-scissors";
		shadow = "bg-orange-700";
	}

	const circleSize = size === "small" ? "h-28 md:h-40" : "h-32 md:h-56";
	const innerCircleSize = size === "small" ? "h-20 md:h-28" : "h-24 md:h-44";
	const iconSize = size === "small" ? "h-16" : "h-18 md:h-24";

	return (
		<div
			onClick={onClick}
			className={`grid relative place-items-center z-10 pick-${icon} hover:cursor-pointer `}
		>
			<span
				className={`${radial} ${circleSize} grid place-items-center relative z-20 aspect-square rounded-full`}
			>
				<span
					className={`${innerCircleSize} aspect-square grid place-items-center absolute mt-3 z-40 rounded-full bg-white`}
				>
					<img className={`${iconSize}`} src={`/images/icon-${icon}.svg`} alt="icon" />
				</span>
				<span className={`${innerCircleSize} aspect-square absolute z-30 rounded-full bg-zinc-300`}></span>
			</span>
			<span className={`${shadow} ${circleSize} aspect-square absolute -bottom-2 rounded-full`}></span>
			{win && (
				<>
					<span
						className={`h-[500px] z-[1] top aspect-square absolute rounded-full bg-zinc-600 opacity-10`}
					></span>
					<span
						className={`h-[400px] z-[2] top aspect-square absolute rounded-full bg-zinc-600 opacity-20`}
					></span>
					<span
						className={`h-[300px] z-[3] top aspect-square absolute rounded-full bg-zinc-600 opacity-30`}
					></span>
				</>
			)}
		</div>
	);
};

export default Circle;
