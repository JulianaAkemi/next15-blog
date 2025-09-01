import { DeletePostButton } from "@/app/admin/DeletePostButton";
import { findAllPostAdmin } from "@/lib/post/queries/admin";
import clsx from "clsx";
import Link from "next/link";

export default async function PostsListAdmin() {
	const posts = await findAllPostAdmin();

	return (
		<div className="mb-16">
			{posts.map((post) => {
				return (
					<div
						className={clsx(
							"py-2 px-2",
							!post.published && "bg-slate-200",
							"flex gap-2 items-center justify-between",
							"hover:bg-gray-300 hover:cursor-pointer"
						)}
						key={post.id}
					>
						<Link href={`/admin/post/${post.id}`}>{post.title}</Link>

						{!post.published && (
							<span className="text-xs text-slate-600 italic">
								(Não publicado)
							</span>
						)}

						<DeletePostButton id={post.id} title={post.title} />
					</div>
				);
			})}
		</div>
	);
}
