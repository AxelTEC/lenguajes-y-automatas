/* import Image from "next/image";
 */
const DataCard = ({ name, description, image }) => {
	return (
		<>
			<h3 className="text-shadow text-xl text-left text-white mt-4 sm:text-md">
				{name}:
			</h3>
			<p className=" text-xl text-justify text-slate-200 sm:text-sm">
				{description}
			</p>
			{/* {image && (
				<Image
					src={require(`./../../../helpers/images/${image}`)}
					width="70%"
					className="m-auto mt-4"
				/>
			)} */}
		</>
	);
};

export default DataCard;
