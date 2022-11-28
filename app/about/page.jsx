import React from "react";
import ContentLayout from "../components/ContentLayout";

const page = () => {
	return (
		<ContentLayout>
			<Data
				name="Universidad"
				description="Instituto Tecnológico de Ensenada"
			/>
			<Data name="Docente" description="Xenia Padilla" />
			<Data name="Estudiante" description="Axel A. Enciso Robles" />
		</ContentLayout>
	);
};

const Data = ({ name, description }) => {
	return (
		<h2 className="text-center text-white text-4xl mt-8">
			<b className="text-indigo-500 text-shadow">{name}:</b> <br />{" "}
			{description}
		</h2>
	);
};

export default page;
