import React from "react";
import styles from "./../styles/Components.module.css";

const Output = ({ output }) => {
	return (
		<div className={styles["c-output"]}>
			<pre>{output}</pre>
		</div>
	);
};

export default Output;
