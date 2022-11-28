import { useState } from "react";

export function useLocalStorage(key, valorInicial) {
	const [valorAlmacenado, setValorAlmacenado] = useState(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : valorInicial;
		} catch (err) {
			return valorInicial;
		}
	});

	const setValue = (value) => {
		try {
			setValorAlmacenado(value);
			window.localStorage.setItem(key, JSON.stringify(value));
		} catch (err) {
			console.error(err);
		}
	};
	return [valorAlmacenado, setValue];
}
