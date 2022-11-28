import React from "react";
import ContentLayout from "../../components/ContentLayout";
import Button from "../../components/unidades/Button";
import DataCard from "../../components/unidades/DataCard";
import Title from "../../components/unidades/Title";
import fsPromises from "fs/promises";
import path from "path";

const fetchData = async (unidad) => {
	const filePath = path.join(process.cwd(), `data/${unidad}.json`);
	const jsonData = await fsPromises.readFile(filePath);
	return JSON.parse(jsonData);
};
const Ejercicios = async ({ params }) => {
	const data = await fetchData(params.unidad);
	return (
		<>
			<ContentLayout>
				<Title unidad={data.unidad} title={data.title} />
				{data?.exercises?.map(({ name, description, image = false }) => (
					<DataCard
						name={name}
						description={description}
						image={
							image &&
							require(path.join(process.cwd(), `helpers/images/${image}`))
						}
					/>
				))}
				<Button unidad={params.unidad} />
			</ContentLayout>
		</>
	);
};

export default Ejercicios;
