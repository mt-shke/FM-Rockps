import { useState } from "react";

const Rules: React.FC = () => {
	const [modal, setModal] = useState(false);

	return (
		<>
			<div
				onClick={() => setModal(true)}
				className="absolute bottom-6 inset-x-0 mx-auto w-fit z-10 grid place-items-center py-[2px] px-6 font-normal border-2 rounded-lg opacity-80 hover:cursor-pointer md:fixed md:inset-x-auto md:right-6"
			>
				RULES
			</div>
			<div className={`${modal ? "grid" : "hidden"} absolute w-full h-full inset-0 z-20 place-items-center`}>
				<div onClick={() => setModal(false)} className="fixed inset-0 bg-black opacity-30"></div>
				<div className="flex flex-col gap-6 relative z-10 p-6 rounded-lg bg-white">
					<div className="flex justify-between">
						<h1 className="text-black">RULES</h1>
						<img
							onClick={() => setModal(false)}
							className="hover:cursor-pointer"
							src="images/icon-close.svg"
							alt="icon"
						/>
					</div>
					<img className="w-80 aspect-[6/5]" src="/images/image-rules.svg" alt="rules" />
				</div>
			</div>
		</>
	);
};
export default Rules;
