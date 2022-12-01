import React from "react";
import Banner from "./components/Banner";
import Card from "./components/Card";
import ContentLayout from "./components/ContentLayout";
import fsPromises from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const getUnidades = async () => {
	const filePath = path.join(process.cwd(), `data/unidades.json`);
	const jsonData = await fsPromises.readFile(filePath);
	return JSON.parse(jsonData);
};

export default async function HomePage() {
	const { unidades } = await getUnidades();
	return (
		<>
			<Banner />
			<ContentLayout>
				<h1 className="sm:text-center text-shadow text-2xl text-white font-bold">
					Temas:
				</h1>
				{unidades?.map(({ title, text, url }, i) => (
					<Card key={uuidv4()} title={title} text={text} url={url} />
				))}
			</ContentLayout>
		</>
	);
}
