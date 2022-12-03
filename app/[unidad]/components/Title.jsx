import React from "react";

const Title = ({ unidad, title }) => {
	return (
		<>
			<h1 className="text-shadow text-xl text-left text-indigo-500 sm:text-md">
				{unidad} <br />
			</h1>
			<h2 className="text-shadow text-2xl text-center mt-4 text-white bg-white/30 shadow-xl backdrop-blur-lg w-fit m-auto p-4 rounded-md sm:text-sm">
				{title}
			</h2>
			<div className="w-3/4 m-auto h-1 mt-4  rounded-lg"></div>
		</>
	);
};

export default Title;
