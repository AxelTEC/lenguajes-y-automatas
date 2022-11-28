"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const Card = ({ title, text, url }) => {
	const linkStyle =
		"px-2 py-1 rounded-lg mt-2 text-indigo-500 flex w-32 bg-zinc-900 justify-left gap-3 items-center";
	return (
		<div className="m-auto w-full h-auto p-4 backdrop-blur-3xl bg-white/10 shadow-md shadow-blue-500/10 rounded-lg mt-10 z-30 relative border-2 border-slate-700/50 ">
			<h2 className="sm:text-md text-white drop-shadow-lg shadow-black font-bold text-xl">
				{title}
			</h2>
			<div>
				<p className="sm:text-sm text-slate-100 text-justify">{text}</p>
			</div>
			<div className="flex gap-3 sm:justify-between">
				<Link href={`${url}/teoria`} className={linkStyle}>
					<Icon icon="mdi:file-document" />
					<span className="text-white">Teoría</span>
				</Link>
				<Link href={`${url}/ejercicios`} className={linkStyle}>
					<Icon icon="mdi:pencil" />
					<span className="text-white">Ejercicios</span>
				</Link>
			</div>
		</div>
	);
};

export default Card;
