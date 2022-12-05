"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState } from "react";

const Resultado = ({ src }) => {
	const [showResult, setShowResult] = useState(false);
	return (
		<>
			<button
				className=" py-1 rounded-lg mt-2 text-sm text-black font-semibold flex px-2 bg-green-200 shadow-md shadow-green-500/30 justify-left gap-1 items-center"
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
					<div className="w-1/2 p-10 sm:w-5/6 mx-auto h-full bg-transparent relative">
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

export default Resultado;
