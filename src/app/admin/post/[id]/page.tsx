import { ManagePostForm } from "../../ManagePostForm";

export const dynamic = "force-dynamic";

export default async function AdminPostNewPage() {
	return (
		<>
			<h1 className="mb-5">Criar post</h1>

			<ManagePostForm />
		</>
	);
}
