import React from "react";
import styles from "./../styles/Components.module.css";

const LayoutCompiler = ({ children, compiler }) => {
	return <div className={compiler ? styles["c-layout"] : ""}>{children}</div>;
};

export default LayoutCompiler;
