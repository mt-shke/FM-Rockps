import Rules from "./components/Rules";
import Score from "./components/Score";
import Main from "./components/main/Main";

const App = () => {
	return (
		<div className="radial-bg relative flex flex-col justify-start items-center min-h-screen w-full text-barlow font-bold text-white overflow-hidden">
			<Score />
			<Main />
			<Rules />
		</div>
	);
};

export default App;
