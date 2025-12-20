import { Button } from "@modules/common/presentation/lib/button";
import { InputOutline } from "@modules/common/presentation/lib/input-outline";
import { type ChangeEvent, type FormEvent, useState } from "react";
import { useNavigate } from "react-router";

export function SearchAccount() {
	const [username, setUsername] = useState("");
	const router = useNavigate();

	const goToProfile = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		router(`/usuarios/${username}`);
	};

	const changeOnInput = (e: ChangeEvent<HTMLInputElement>) =>
		setUsername(e.target.value);

	return (
		<form className="flex gap-4 w-[400px]" onSubmit={goToProfile}>
			<InputOutline
				type="search"
				name="username"
				placeholder="Ingresar nombre de usuario"
				minLength={3}
				maxLength={50}
				value={username}
				onChange={changeOnInput}
				required
			/>
			<Button type="submit">Buscar</Button>
		</form>
	);
}
