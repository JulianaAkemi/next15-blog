"use server";

import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "@/db/drizzle/schemas";
import { SIMULATE_WAIT_IN_MS } from "@/lib/constants";
import { postRepository } from "@/repositories/post";
import { asyncDelay } from "@/utils/async-delay";
import { revalidateTag } from "next/cache";

export async function deletePostAction(id: string) {
	//TODO: check user login

	//TODO: remove asyncdelay
	await asyncDelay(SIMULATE_WAIT_IN_MS, true);

	if (!id || typeof id !== "string") {
		return {
			error: "ID inválido",
		};
	}

	const post = await postRepository.findById(id).catch(() => undefined);

	if (!post) {
		return {
			error: "Post não existe",
		};
	}

	// TODO: mover este método para o repositório
	await drizzleDb.delete(postsTable).where(eq(postsTable.id, id));

	// TODO: revalidateTag ou revalidatePath
	revalidateTag("posts");
	revalidateTag(`post-${post.slug}`);

	return {
		error: "",
	};
}
