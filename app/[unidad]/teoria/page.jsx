import ContentLayout from "../../components/ContentLayout";
import Button from "../../components/unidades/Button";
import DataCard from "../../components/unidades/DataCard";
import Title from "../../components/unidades/Title";
import fasescompilacion from "./../../../helpers/images/fasescompilacion.png";
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
						<DataCard name={name} description={description} image={image} />
					);
				})}
				<Button unidad={params.unidad} />
			</ContentLayout>
		</>
	);
};

export default page;
