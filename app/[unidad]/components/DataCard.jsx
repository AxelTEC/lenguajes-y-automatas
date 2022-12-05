import Answer from "./Answer";

const DataCard = ({ name, description, children }) => {
	return (
		<>
			<h3 className="text-shadow text-xl text-left text-white mt-10 sm:text-md">
				{name}:
			</h3>
			<p className="text-xl text-justify text-slate-200 sm:text-sm">
				{description}
			</p>
			{children}
		</>
	);
};

export default DataCard;
