import React from "react";

const ContentLayout = ({ children }) => {
	return (
		<>
			<div className="max-w-2xl md:max-w-md sm:max-w-none sm:px-10 overflow-hidden m-auto w-full h-auto pt-10 pb-24 relative">
				{children}
			</div>
		</>
	);
};

export default ContentLayout;
