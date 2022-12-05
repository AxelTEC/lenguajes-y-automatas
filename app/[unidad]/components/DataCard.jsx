import Image from "next/image";
import Resultado from "./Resultado";

const DataCard = ({ name, description, answer = false }) => {
	return (
		<>
			<h3 className="text-shadow text-xl text-left text-white mt-10 sm:text-md">
				{name}:
			</h3>
			<p className="text-xl text-justify text-slate-200 sm:text-sm">
				{description}
			</p>
			{answer && <Resultado src={answer} />}
		</>
	);
};

export default DataCard;
