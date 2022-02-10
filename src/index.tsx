import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import GameProvider from "./state/context/GameContext";

ReactDOM.render(
	<GameProvider>
		<App />
	</GameProvider>,

	document.querySelector("#root")
);
