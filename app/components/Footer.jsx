"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
	const path = usePathname();
	return (
		<footer
			className={` ${
				path === "/proyecto" && "hidden"
			} w-full py-4 flex justify-center items-center gap-10 border-t-2 border-indigo-400/80 bg-white/10 text-white backdrop-blur-xl`}
		>
			<FooterLink
				href={"https://github.com/AxelTEC/lenguajes-y-automatas-ejercicios"}
				icon={<Icon icon="mdi:github" width={30} />}
			/>
			<FooterLink
				href={"https://www.ensenada.tecnm.mx/"}
				icon={<Icon icon="ic:round-school" width={30} />}
			/>
			<FooterLink
				href={
					"https://drive.google.com/file/d/1NAU-1wN5SGtdAdVWbsJn1ddLshNdyGrZ/view?usp=sharing"
				}
				icon={
					<Icon icon="simple-icons:diagramsdotnet" width={22} className="m-1" />
				}
			/>
		</footer>
	);
};

const FooterLink = ({ href, icon }) => {
	return (
		<div className="bg-zinc-200 rounded-full p-1 shadow-xl">
			<Link href={href} className="text-indigo-800" target="_blank">
				{icon}
			</Link>
		</div>
	);
};

export default Footer;
