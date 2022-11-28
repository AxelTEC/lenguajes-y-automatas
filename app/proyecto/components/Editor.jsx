"use client";
import styles from "./../styles/Components.module.css";
import { Icon } from "@iconify/react";
import AceEditor from "react-ace/lib/ace";
import "ace-builds/src-noconflict/theme-dawn";
import "ace-builds/src-noconflict/mode-javascript";

const Editor = ({
	handleCompile,
	currentFile,
	setCurrentFile,
	handleSaveFiles,
}) => {
	const handleChange = (newValue) => {
		setCurrentFile({
			...currentFile,
			code: newValue,
		});
	};
	return (
		<div id="editor-code" className={styles["c-editor"]}>
			<AceEditor
				mode="javascript"
				width="100%"
				height="90%"
				theme="dawn"
				onChange={handleChange}
				value={currentFile ? currentFile.code : ""}
			/>
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
