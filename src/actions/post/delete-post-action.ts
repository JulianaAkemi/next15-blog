"use server";

import { postRepository } from "@/repositories/post";
import { revalidateTag } from "next/cache";

export async function deletePostAction(id: string) {
	//TODO: user authentication

	if (!id || typeof id !== "string") {
		return {
			error: "ID inválido",
		};
	}

	let post;
	try {
		post = await postRepository.delete(id);
	} catch (e: unknown) {
		if (e instanceof Error) {
			return {
				error: e.message,
			};
		}

		return {
			error: "Erro desconhecido",
		};
	}

	revalidateTag("posts");
	revalidateTag(`post-${post.slug}`);

	return {
		error: "",
	};
}
