import React from "react";
import Image from "next/image";
import banner from "./../../helpers/images/banner.jpg";
import Link from "next/link";

const Banner = () => {
	return (
		<div className="relative h-96 w-full max-w-3xl m-auto">
			<div className="ex left-[-3rem] bg-indigo-500/10 backdrop-blur-xl mt-10 absolute z-40 md:rounded-lg md:left-[15%] md:px-3 sm:left-[5%]">
				<div className="flex flex-col text-left justify-center h-full w-4/6 items-left p-6 md:p-1 md:w-full">
					<h1 className="md:text-md sm:text-sm text-shadow text-center text-indigo-100 font-bold z-20 text-2xl drop-shadow-xl shadow-orange-500">
						Lenguajes y automatas
					</h1>
					<p className="md:text-sm sm:text-xs text-slate-100 max-w-md text-center font-bold text-md drop-shadow-xl shadow-orange-500 md:text-justify">
						La materia de lenguajes y autómatas nos brinda un conocimiento
						teórico y práctico sobre cómo funcionan los lenguajes de
						programación, la lógica que estos conllevan y su traducción a
						leguaje maquina, con a fin de poder construir nuestro propio
						lenguaje.
					</p>
					<Link
						href="./proyecto"
						className="bg-indigo-500 shadow-lg max-w-fit self-center shadow-indigo-500/50 ease-in-out px-2 py-1 z-10 mt-4 rounded-md font-bold"
					>
						Ver Proyecto 👀
					</Link>
				</div>
			</div>
			<div className="xe w-10 h-10 top-10 right-[-3rem] z-10 backdrop-blur-xl mt-10 absolute md:rounded-lg md:right-[15%] sm:right-[5%]">
				<Image
					alt="Maquina de turing"
					src={banner}
					fill={true}
					priority
					sizes="(max-width: 850px) 33vw, (max-width: 1200px) 75vw"
					className="object-cover scale-x-[-1] md:scale-x-[1]"
				/>
			</div>
		</div>
	);
};

export default Banner;

/* 
<div className="w-full h-96 bg-white overflow-hidden relative border-b-2 border-slate-900 z-10">
			<Image src={banner} fill={true} className="object-cover scale-x-[-1]" />
			<div className="bg-slate-800/30 absolute w-full h-full top-0 flex items-center justify-left gap-5">
				<div className="w-1/2 -rotate-12 h-screen absolute bg-slate-200 -left-[4rem] box-shadow-2xl shadow-black/70"></div>
				<div className="flex flex-col w-5/12 items-center p-6">
					<h1 className="text-slate-900 font-bold z-20 text-2xl drop-shadow-xl shadow-orange-500">
						Lenguajes y automatas
					</h1>

					<p className="text-slate-500 max-w-md text-center font-bold text-md drop-shadow-xl shadow-orange-500">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
						itaque doloremque adipisci! Voluptatum, odio. Deleniti sed facere
						culpa architecto animi quidem voluptas qui deserunt! Similique
						minima ipsam sit harum ducimus.
					</p>
					<Link
						href="./proyecto"
						className="bg-indigo-500 shadow-lg shadow-indigo-500/50 ease-in-out px-2 py-1 z-10 mt-4 rounded-md font-bold"
					>
						Ver Proyecto 👀
					</Link>
				</div>
			</div>
		</div>
*/
