"use client";
import Head from "next/head";
import LayoutCompiler from "./components/LayoutCompiler";
import FileBrowser from "./components/FileBrowser";
import Output from "./components/Output";
import BTNShowFilesMenu from "./components/BTNShowFilesMenu";
import Editor from "./components/Editor";
import styles from "./styles/Components.module.css";
import { useState, useEffect } from "react";
import { useLocalStorage } from "./../../hooks/useLocalStorage";
import { compilar } from "./gramatica/Calculadora";
import { v4 as uuidv4 } from "uuid";

export default function Compilador() {
	const init = [
		{
			id: uuidv4(),
			name: "Ejemplo",
			code: "/** Resolver problemas de Coulomb **/\nk = 9 E 9\nq1 = 5 E -6\nq2 = -4 E -6\nr = 0.4\nF = (k*q1*q2)/(r*r)\nimprimir(F)",
		},
	];
	const [currentFile, setCurrentFile] = useState({
		id: "",
		name: "",
		code: "",
	});
	const [showFilesMenu, setShowFilesMenu] = useState(false);
	const [output, setOutput] = useState("");
	const [files, setFiles] = useLocalStorage("files", init);

	useEffect(() => {
		if (files.length !== 0) setCurrentFile(files[0]);
	}, []);

	const handleSaveFiles = () => {
		let newFiles = files.map((file) => {
			if (file.id === currentFile.id) {
				file.code = currentFile.code;
			}
			return file;
		});
		setFiles(newFiles);
	};

	const handleCompile = () => {
		handleSaveFiles();
		setOutput(compilar(currentFile.code));
	};

	return (
		<>
			<LayoutCompiler compiler>
				<Head>
					<title>Compilador online</title>
				</Head>
				{/* <Header classStyle={styles["c-header"]} /> */}
				<FileBrowser
					showFilesMenu={showFilesMenu}
					files={files}
					setFiles={setFiles}
					currentFile={currentFile}
					setCurrentFile={setCurrentFile}
					handleSaveFiles={handleSaveFiles}
				/>
				{files.length !== 0 ? (
					<Editor
						handleCompile={handleCompile}
						currentFile={currentFile}
						setCurrentFile={setCurrentFile}
						handleSaveFiles={handleSaveFiles}
					/>
				) : (
					<div className={styles["c-editor"]}>Sin archivos</div>
				)}

				<Output output={output} />
				<BTNShowFilesMenu
					setShowFilesMenu={setShowFilesMenu}
					showFilesMenu={showFilesMenu}
				/>
			</LayoutCompiler>
		</>
	);
}
