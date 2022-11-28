import React from "react";
import styles from "./../styles/Components.module.css";
import { Icon } from "@iconify/react";
import File from "./File";
import { v4 as uuidv4 } from "uuid";

const FileBrowser = ({
	showFilesMenu,
	files,
	setFiles,
	currentFile,
	setCurrentFile,
	handleSaveFiles,
}) => {
	const handleAddFile = () => {
		let name = prompt("Nombre del archivo");
		let newFile = { id: uuidv4(), name, code: "" };
		setFiles([...files, newFile]);
		setCurrentFile(newFile);
	};
	/* const handleAddFolder = () => {};
	const handleOpenFolder = () => {}; */
	const handleReload = () => {};
	const handleRenameFile = (idRename) => {
		let newName = prompt("Nuevo nombre del archivo");
		let newFiles = files.map((file) => {
			if (file.id === idRename) {
				file.name = newName;
			}
			return file;
		});
		setFiles(newFiles);
	};
	const handleDeleteFile = (idDelete) => {
		if (!confirm("seguro que desea eliminar este archivo")) return;
		if (idDelete === currentFile.id)
			setCurrentFile({ id: "", name: "", code: "" });
		let newFiles = files.filter(({ id }) => idDelete !== id);
		setFiles(newFiles);
	};
	return (
		<div
			className={`${styles["c-aside"]} ${
				showFilesMenu ? styles["c-aside__active"] : ""
			}`}
		>
			<div className={styles["aside-options"]}>
				<span>/</span>
				<div>
					<button onClick={handleAddFile}>
						<Icon icon="ant-design:file-add-filled" color="white" />
					</button>
					{/* <button>
						<Icon
							icon="ant-design:folder-add-filled"
							color="white"
							height={20}
						/>
					</button> */}
					<button>
						<Icon icon="ion:reload-circle-sharp" color="white" height={19} />
					</button>
				</div>
			</div>
			{files &&
				files.map((file) => (
					<File
						key={file.id}
						file={file}
						currentFile={currentFile}
						setCurrentFile={setCurrentFile}
						handleSaveFiles={handleSaveFiles}
						handleDeleteFile={handleDeleteFile}
						handleRenameFile={handleRenameFile}
					/>
				))}
		</div>
	);
};

export default FileBrowser;
