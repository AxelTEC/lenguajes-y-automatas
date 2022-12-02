"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import BackgroundMenu from "./BackgroundMenu";

const Header = () => {
	const router = usePathname();
	const [menu, setMenu] = useState(false);
	const LinkStyle =
			"text-white fon-bold text-lg px-2 rounded-md hover:bg-slate-500/70 transition-all transition-sm ease-in ",
		active = "bg-indigo-500 hover:bg-indigo-500";
	const Links = [
		{
			path: "/",
			title: "Inicio",
		},
		{
			path: "/unidad3/teoria",
			title: "Automatas",
		},
		{
			path: "/unidad2/teoria",
			title: "RegExp",
		},
		{
			path: "/proyecto",
			title: "Proyecto",
		},
		{
			path: "/about",
			title: "About",
		},
	];

	return (
		<header className="max-w-full w-full sm:px-6  h-[10vh] flex justify-between items-center px-10 shadow-2xl z-50 backdrop-blur-xl sticky top-0">
			<Link
				href="/"
				className="text-gray-100 sm:text-lg text-xl font-extrabold text-shadow flex items-center"
			>
				<span className="text-indigo-500 text-2xl sm:text-xl">Æ</span>
				<span className="ml-2"> Lengujes y Automatas I</span>
			</Link>
			<nav className="w-auto flex gap-4 md:hidden">
				{Links?.map(({ path, title }) => (
					<Link
						key={path}
						href={path}
						className={`${LinkStyle} ${router === path && active}`}
					>
						{title}
					</Link>
				))}
			</nav>
			<nav
				className={`fixed z-50 w-3/4 bg-slate-800 h-[90vh] top-[10vh] right-0 transition-all ease-in-out ${
					menu ? "translate-x-0 block" : "translate-x-full hidden"
				}`}
			>
				{Links?.map(({ path, title }) => (
					<Link
						key={path}
						href={path}
						className={`block pl-4 text-xl border-b-2 border-indigo-400/20 text-white font-semibold py-2 ${
							router === path && active
						}`}
						onClick={() => setMenu(false)}
					>
						{title}
					</Link>
				))}
			</nav>
			{menu && <BackgroundMenu onClick={() => setMenu(false)} />}
			<button
				className="text-white hidden md:inline"
				onClick={() => setMenu(!menu)}
			>
				<Icon icon="material-symbols:menu-rounded" width={35} />
			</button>
		</header>
	);
};

export default Header;
