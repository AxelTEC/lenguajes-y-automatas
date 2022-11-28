import React from "react";
import { Icon } from "@iconify/react";
import styles from "./../styles/Components.module.css";

const File = ({
	file,
	currentFile,
	setCurrentFile,
	handleSaveFiles,
	handleDeleteFile,
	handleRenameFile,
}) => {
	return (
		<div
			className={`${styles["aside-file"]} ${
				currentFile.id === file.id ? styles["aside-file__active"] : ""
			}`}
			onClick={() => {
				handleSaveFiles();
				setCurrentFile(file);
			}}
		>
			<span>{file.name}</span>
			<div>
				<button
					onClick={(e) => {
						e.stopPropagation();
						handleRenameFile(file.id);
					}}
				>
					<Icon icon="fluent:rename-20-filled" color="white" height={15} />
				</button>
				<button
					onClick={(e) => {
						e.stopPropagation();
						handleDeleteFile(file.id);
					}}
				>
					<Icon icon="fluent:delete-16-filled" color="white" height={15} />
				</button>
			</div>
		</div>
	);
};

export default File;
