import { PostDetail } from "@/components/PostDetail";
import { SpinLoader } from "@/components/SpinLoader";
import { findPostBySlugCached } from "@/lib/post/queries/public";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type PostSlugPageProps = {
	params: Promise<{ slug: string }>;
};

export async function generateMetadata({
	params,
}: PostSlugPageProps): Promise<Metadata> {
	const { slug } = await params;
	const post = await findPostBySlugCached(slug);

	return {
		title: post.title,
		description: post.excerpt,
	};
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
	const { slug } = await params;

	let post;

	try {
		post = await findPostBySlugCached(slug);
	} catch {
		post = undefined;
	}

	if (!post) {
		notFound();
	}

	return (
		<Suspense fallback={<SpinLoader containerClasses="min-h-20 mb-16" />}>
			<PostDetail slug={slug} />
		</Suspense>
	);
}
