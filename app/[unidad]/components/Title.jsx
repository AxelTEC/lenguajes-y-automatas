import React from "react";

const Title = ({ unidad, title }) => {
	return (
		<>
			<h1 className="text-shadow text-xl text-left text-indigo-500 sm:text-lg">
				{unidad} <br />
			</h1>
			<h2 className="text-shadow text-2xl text-center mt-4 text-white bg-white/30 shadow-xl backdrop-blur-lg w-fit m-auto p-4 rounded-md sm:text-xl">
				{title}
			</h2>
		</>
	);
};

export default Title;
