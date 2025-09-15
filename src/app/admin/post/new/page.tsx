import { Metadata } from "next";
import { ManagePostForm } from "../../ManagePostForm";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
	title: "Criar post",
};

export default async function AdminPostNewPage() {
	return (
		<>
			<h1 className="text-xl font-extrabold mb-5">Criar post</h1>

			<ManagePostForm mode="create" />
		</>
	);
}
