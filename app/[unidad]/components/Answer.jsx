"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Link from "next/link";

const Answer = ({ type, data }) => {
	return (
		<>
			{type === "answer" && <AnswerImg src={data} />}
			{(type === "code" ||
				type === "demo" ||
				type === "grammar" ||
				type === "test") && <AnswerLink type={type} link={data} />}
		</>
	);
};

const AnswerImg = ({ src }) => {
	const [showResult, setShowResult] = useState(false);
	return (
		<>
			<button
				className="py-1 rounded-lg mt-2 text-sm bg-green-400 text-black font-semibold flex px-2 shadow-md shadow-green-500/30 justify-left gap-1 items-center"
				onClick={() => setShowResult(!showResult)}
			>
				<Icon icon="carbon:result" />
				Respuesta
			</button>
			{showResult && (
				<div
					className="fixed z-50 w-full h-[90vh] left-0 top-[10vh] bg-zinc-100/10 backdrop-blur-lg flex flex-col justify-center items-center"
					onClick={(e) => setShowResult(false)}
				>
					<button className="text-zinc-100">X</button>
					<div className="w-1/2 h-[70%] p-10 sm:w-5/6 mx-auto bg-transparent relative">
						<Image
							src={src}
							fill={true}
							className="object-contain relative w-3/4 h-[unset] mx-auto"
						/>
					</div>
				</div>
			)}
		</>
	);
};

const AnswerLink = ({ type, link }) => {
	const colors = new Map([
		["code", "bg-black text-white"],
		["demo", "bg-blue-500 text-white shadow-blue-500/30"],
		["grammar", "bg-orange-500 text-white shadow-orange-500/30"],
		["test", "bg-yellow-500 text-white shadow-yellow-500/30"],
	]);
	return (
		<>
			<>
				<Link
					href={link}
					target="_blank"
					className={`py-1 rounded-lg mt-2 text-sm ${colors.get(
						type
					)} font-semibold px-2 shadow-md w-fit flex justify-left gap-1 items-center`}
				>
					{type === "code" && (
						<>
							<Icon icon="mdi:github" className="inline" />
							Código
						</>
					)}
					{type === "demo" && (
						<>
							<Icon icon="icon-park-outline:check-correct" />
							Demo
						</>
					)}
					{type === "grammar" && (
						<>
							<Icon icon="fluent:text-grammar-arrow-left-20-filled" />
							Gramática
						</>
					)}
					{type === "test" && (
						<>
							<Icon icon="iconoir:test-tube" />
							Test file
						</>
					)}
				</Link>
			</>
		</>
	);
};

export default Answer;
