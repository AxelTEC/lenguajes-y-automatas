"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState } from "react";

const Resultado = ({ src }) => {
	const [showResult, setShowResult] = useState(false);
	return (
		<>
			<button
				className="px-2 py-1 rounded-lg mt-2 text-black font-bold flex w-32 bg-green-500 shadow-md shadow-green-500/30 justify-left gap-3 items-center"
				onClick={() => setShowResult(!showResult)}
			>
				<Icon icon="carbon:result" />
				Respuesta
			</button>
			{showResult && (
				<div
					className="fixed z-50 w-full h-[90vh] left-0 top-[10vh] bg-zinc-800/70 backdrop-blur-lg flex justify-center items-center"
					onClick={() => setShowResult(false)}
				>
					<div className="w-3/4">
						<button
							className="text-zinc-100"
							onClick={() => setShowResult(false)}
						>
							X Cerrar
						</button>
						<div className="w-full m-auto h-20 overflow-hidden relative shadow-lg ">
							<Image src={src} fill={true} className="object-cover" />
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Resultado;
