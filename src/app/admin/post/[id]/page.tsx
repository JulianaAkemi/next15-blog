import { makePublicPostFromDb } from "@/dto/post/dto";
import { findPostByIdAdmin } from "@/lib/post/queries/admin";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ManagePostForm } from "../../ManagePostForm";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
	title: "Editar post",
};

type AdminPostIdPageProps = {
	params: Promise<{
		id: string;
	}>;
};

export default async function AdminPostIdPage({
	params,
}: AdminPostIdPageProps) {
	const { id } = await params;
	const post = await findPostByIdAdmin(id).catch();

	if (!post) notFound();

	const publicPost = makePublicPostFromDb(post);

	return (
		<>
			<h1 className="text-xl font-extrabold md-5">Editar post</h1>

			<ManagePostForm publicPost={publicPost} />
		</>
	);
}
