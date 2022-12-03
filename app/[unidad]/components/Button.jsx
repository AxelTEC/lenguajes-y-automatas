"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Button = ({ unidad }) => {
	const pathName = usePathname();
	return (
		<Link
			href={`/${unidad}/${
				pathName === `/${unidad}/ejercicios` ? "teoria" : "ejercicios"
			}`}
			className="mx-auto w-fit text-white font-bold block self-center rounded-lg px-2 py-1 text-xl shadow-xl shadow-indigo-500/30 mt-8 bg-indigo-500  text-center"
		>
			{pathName === `/${unidad}/ejercicios` ? "Teoría" : "Ejercicios"}
		</Link>
	);
};

export default Button;
