import React from "react";

const BackgroundMenu = ({ onClick }) => {
	return (
		<div
			onClick={onClick}
			className="w-full h-[90vh] fixed top-[10vh] left-0 bg-zinc-900/80 z-40"
		></div>
	);
};

export default BackgroundMenu;
