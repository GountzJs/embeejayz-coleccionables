import { type ChangeEvent, type FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../lib/button";
import { InputOutline } from "../lib/input-outline";

export function SearchAccount() {
	const [username, setUsername] = useState("");
	const router = useNavigate();

	const goToProfile = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		router(`/usuario/${username}`);
	};

	const changeOnInput = (e: ChangeEvent<HTMLInputElement>) =>
		setUsername(e.target.value);

	return (
		<form className="flex gap-4 w-full max-w-[400px]" onSubmit={goToProfile}>
			<InputOutline
				type="search"
				name="username"
				placeholder="Ingresar nombre de usuario"
				minLength={3}
				maxLength={50}
				required
				value={username}
				onChange={changeOnInput}
			/>
			<Button type="submit">Buscar</Button>
		</form>
	);
}
