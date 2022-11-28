import React from "react";
import { Icon } from "@iconify/react";
import styles from "./../styles/Components.module.css";

const BTNShowFilesMenu = ({ setShowFilesMenu, showFilesMenu }) => {
	return (
		<button
			className={styles["button-files"]}
			onClick={() => setShowFilesMenu(!showFilesMenu)}
		>
			<Icon icon="mdi:file-eye" color="black" height={30} />
		</button>
	);
};

export default BTNShowFilesMenu;
