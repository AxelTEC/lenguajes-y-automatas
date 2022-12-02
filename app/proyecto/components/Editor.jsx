"use client"; /* 
import AceEditor from "react-ace";
import "ace-builds";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/theme-tomorrow_night"; */
import styles from "./../styles/Components.module.css";
import { Icon } from "@iconify/react";

const Editor = ({
	handleCompile,
	currentFile,
	setCurrentFile,
	handleSaveFiles,
}) => {
	/* const handleChange = (newValue) => {
		setCurrentFile({
			...currentFile,
			code: newValue,
		});
	}; */
	const handleChange = ({ target: { value } }) => {
		setCurrentFile({
			...currentFile,
			code: value,
		});
	};
	return (
		<div id="editor-code" className={styles["c-editor"]}>
			{/* <AceEditor
				width="100%"
				height="90%"
				onChange={handleChange}
				value={currentFile ? currentFile.code : ""}
			/> */}
			{currentFile && (
				<textarea
					className="w-full h-[88%] p-3 resize-none outline-none bg-zinc-900 text-white text-sm"
					value={currentFile?.code}
					onChange={handleChange}
				></textarea>
			)}
			<div className={styles["c-editor-buttons"]}>
				<span>Resultado:</span>
				<div>
					<button onClick={handleCompile}>
						<Icon icon="codicon:run-all" />
						<span>Compilar</span>
					</button>
					<button onClick={handleSaveFiles}>
						<Icon icon="carbon:save" />
						<span>Guardar</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Editor;
