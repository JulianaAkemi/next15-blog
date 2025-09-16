"use server";

import { verifyPassword } from "@/lib/login/manage-login";
import { asyncDelay } from "@/utils/async-delay";

type LoginActionState = {
	username: string;
	error: string;
};

export async function loginAction(state: LoginActionState, formData: FormData) {
	await asyncDelay(5000);

	if (!(formData instanceof FormData)) {
		return {
			username: "",
			error: "Dados inválidos",
		};
	}

	const username = formData.get("username")?.toString().trim() || "";
	const password = formData.get("password")?.toString().trim() || "";

	if (!username || !password) {
		return {
			username,
			error: "Digite o usuário e a senha",
		};
	}

	//TODO: check user on db
	const isUsernameValid = username === process.env.LOGIN_USER;
	const isPasswordValid = await verifyPassword(
		password,
		process.env.LOGIN_PASSWORD || ""
	);

	if (!isUsernameValid || !isPasswordValid) {
		return {
			username,
			error: "Usuário ou senha inválidos",
		};
	}

	return {
		username: "",
		error: "USUÁRIO LOGADO COM SUCESSO!",
	};
}
