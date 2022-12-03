import { v4 as uuidv4 } from "uuid";
import ContentLayout from "./../../components/ContentLayout";
import Button from "./../components/Button";
import DataCard from "./../components/DataCard";
import Title from "./../components/Title";
import fsPromises from "fs/promises";
import path from "path";

const fetchData = async (unidad) => {
	const filePath = path.join(process.cwd(), `data/${unidad}.json`);
	const jsonData = await fsPromises.readFile(filePath);
	return JSON.parse(jsonData);
};

const page = async ({ params }) => {
	const data = await fetchData(params.unidad);
	return (
		<>
			<ContentLayout>
				<Title unidad={data.unidad} title={data.title} />
				{data?.concepts?.map(({ name, description, image = false }) => {
					return (
						<DataCard
							key={uuidv4()}
							name={name}
							description={description}
							image={image}
						/>
					);
				})}
				<Button unidad={params.unidad} />
			</ContentLayout>
		</>
	);
};

export default page;
