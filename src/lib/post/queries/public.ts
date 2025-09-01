import { postRepository } from "@/repositories/post";
import { unstable_cache } from "next/cache"; //Data Cache
import { notFound } from "next/navigation";

export const findAllPublicPostsCached = unstable_cache(
	async () => await postRepository.findAllPublic()
);

export const findPublicPostBySlugCached = unstable_cache(
	async (slug: string) => {
		const post = await postRepository
			.findBySlugPublic(slug)
			.catch(() => undefined);

		if (!post) notFound();

		return post;
	}
);
