import { v4 as uuidv4 } from "uuid";
import ContentLayout from "./../../components/ContentLayout";
import Button from "./../components/Button";
import DataCard from "./../components/DataCard";
import Title from "./../components/Title";
import fsPromises from "fs/promises";
import path from "path";
import Answer from "../components/Answer";

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
				{data?.exercises?.map(
					(
						{
							name,
							description,
							img = false,
							code = false,
							demo = false,
							grammar = false,
							test = false,
						},
						i
					) => (
						<DataCard key={uuidv4()} name={name} description={description}>
							<div className="flex gap-4">
								{img && <Answer type="answer" data={img} />}
								{demo && <Answer type="demo" data={demo} />}
								{code && <Answer type="code" data={code} />}
								{grammar && <Answer type="grammar" data={grammar} />}
								{test && <Answer type="test" data={test} />}
							</div>
						</DataCard>
					)
				)}
				<Button unidad={params.unidad} />
			</ContentLayout>
		</>
	);
};

export default Ejercicios;
