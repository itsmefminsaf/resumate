"use client";

import { Button } from "@progress/kendo-react-buttons";
import { Typography } from "@progress/kendo-react-common";

const App = () => {
	return (
		<>
			<div className="bg-clip"></div>
			<Typography.h1 className="app-name">
				WELCOME TO
				<span>
					<br />
					RESUMATE
				</span>
			</Typography.h1>
			<Typography.h4>An AI powered resume building application</Typography.h4>
			<Button>Create now..!!!</Button>
		</>
	);
};

export default App;
